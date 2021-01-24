import * as React from 'react';
import renderer from 'react-test-renderer';
import { FlatList } from 'react-native';

import { MonoText } from '../StyledText';
import ScreenStarWars from '../../src/screens/ScreenB/TabTwoScreen';
import { Page1 } from '../../src/hooks/mocks/people.pages';

let mockPeopleList = Page1.results;
let mockNextPage = jest.fn();
let mockRemovePerson = jest.fn();

jest.mock('../../src/hooks/useStarWars', () => {
  return jest.fn().mockReturnValue({
    peopleList: mockPeopleList,
    nextPage: mockNextPage,
    removePerson: mockRemovePerson,
  });
});

it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>);

  expect(tree).toMatchSnapshot();
});

it(`renders Star Wars screen`, () => {
  const tree = renderer.create(<ScreenStarWars />).toJSON();
  expect(tree).toMatchSnapshot();
});
