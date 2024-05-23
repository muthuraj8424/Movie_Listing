import axios from "axios"
export const MovieAPI = axios.create({
    baseURL:"https://www.omdbapi.com"
})