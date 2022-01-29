import axios from 'axios';

const api = axios.create({
    baseURL: "https://ws.audioscrobbler.com/2.0",
    api_key: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
});


export default api;

