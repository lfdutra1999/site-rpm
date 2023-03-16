import axios from "axios";

const api = axios.create({
    baseURL: "http://15.228.232.102:5000/api/v1",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
});

export default api;