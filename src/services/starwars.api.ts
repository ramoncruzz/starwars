import service from './starwars.service';
import { PeopleResponse } from '../../types';

export const getPeople = (page: number) =>
  new Promise<PeopleResponse>((resolve, reject) => {
    service
      .get<PeopleResponse>(`/people/?page=${page}`)
      .then((response: any) => resolve(response.data))
      .catch((error: any) => reject(error));
  });
