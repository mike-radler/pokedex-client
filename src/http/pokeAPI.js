import {$host} from "./index";

export const fetchPokemons = async (limit = 12, offset = 0) => {
    const {data} = await $host.get('pokemon', {params: {limit, offset}})
    return data
}

export const fetchPokemon = async (id) => {
    const {data} = await $host.get('pokemon/' + id)
    return data
}