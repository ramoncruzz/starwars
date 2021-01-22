import { useEffect, useState, useMemo } from 'react';
import { getPeople } from '../services/starwars.api';
import { PeopleResponse, Person } from '../../types';

const useStarWars = () => {
  const [peopleList, setPeopleList] = useState<Array<Person>>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const [hasPeople, setHasPeople] = useState<boolean>(false);

  const removePerson = (name: string) => {};
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
        setPeopleList((current) => current.concat(newList))
      );
  }, [page]);

  return { peopleList, setPage, removePerson };
};
export default useStarWars;
