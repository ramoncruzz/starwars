import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

const StarWars = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default StarWars;
