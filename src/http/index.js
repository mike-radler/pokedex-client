import axios from "axios";

export const $host = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})
