import { renderHook } from '@testing-library/react-hooks';
import useStarWars from '../useStarWars';
import { PeopleResponse } from '../../../types';
import { findOcurrencies } from '../../utils/functions';
jest.mock('../../services/starwars.api', () => {
  const { Page1, Page2, Page3 } = require('../mocks/people.pages');

  const mockPages = (page: string): PeopleResponse => {
    switch (page) {
      case 'page1':
        return Page1;
      case 'page2':
        return Page2;
      case 'page3':
        return Page3;
      default:
        return Page1;
    }
  };
  return {
    getPeople: (page: number) =>
      Promise.resolve(mockPages(`page${page}`) || {}),
  };
});

describe('Tests of usetStarWars', () => {
  it('should get list of Person', async () => {
    const hookUseBoticario = Object.assign(useStarWars);
    const testingLibraryReturn = renderHook(() => hookUseBoticario());

    const { result, waitForNextUpdate } = testingLibraryReturn;
    await waitForNextUpdate();

    const lista1 = result.current.peopleList;
    expect(lista1.length).toEqual(10);

    result.current.nextPage(2);
    await waitForNextUpdate();
    const lista2 = result.current.peopleList;

    expect(lista2.length).toEqual(20);
  });
});

describe('Tests of findOcurrencies function', () => {
  it('should get list of words ocurriencies', async () => {
    const ocurrencies = findOcurrencies(
      'Atirei o pau no gato, mas o gato não morreu.'
    );
    expect(ocurrencies.length).toEqual(7);
    expect(ocurrencies[0].Atirei).toEqual(1);
  });
});
