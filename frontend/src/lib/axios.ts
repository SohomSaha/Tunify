import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://tunify-u45h.onrender.com/api",
});