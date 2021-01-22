export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Text: undefined;
  StarWars?: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: string[];
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
};

export type PeopleResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Person>;
};
