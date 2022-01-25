import axios from 'axios';

const api = axios.create({
    baseURL: "https://ws.audioscrobbler.com/2.0/api_key=affcb81955001a30878737181e4e7e35",
});

export default api;

