import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8008/api/v1",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
});

export default api;