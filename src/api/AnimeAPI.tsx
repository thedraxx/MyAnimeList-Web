import axios from 'axios';

const baseURL = 'https://api.jikan.moe/v4/';

const animeAPI = axios.create({baseURL});

export default animeAPI;
