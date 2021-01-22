import { useEffect, useState, useMemo } from 'react';
import { getPeople } from '../services/starwars.api';
import { Person } from '../../types';

const useStarWars = () => {
  const [peopleList, setPeopleList] = useState<Array<Person>>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const [hasPeople, setHasPeople] = useState<boolean>(true);

  const removePerson = (index: number) => peopleList.splice(index, 1);
  const personsCache = useMemo(
    () =>
      new Promise<Person[]>(async (resolve, reject) => {
        try {
          if (hasPeople) {
            const { count, next, results } = await getPeople(page);
            if (!!!total) setTotal(count);
            setHasPeople(!!next);
            resolve(results);
          } else {
            resolve([]);
          }
        } catch (error) {
          reject(error);
        }
      }),
    [page]
  );

  useEffect(() => {
    if (peopleList.length < total)
      personsCache.then((newList) =>
        setPeopleList((current) =>
          current.concat(newList).sort((first, second) => {
            if (first.name > second.name) return 1;
            if (first.name < second.name) return -1;
            return 0;
          })
        )
      );
  }, [page]);

  return { peopleList, setPage, removePerson };
};
export default useStarWars;
