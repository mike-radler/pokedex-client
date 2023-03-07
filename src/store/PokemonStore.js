import {makeAutoObservable} from "mobx";

export default class PokemonStore {
    constructor() {
        this.pokemons = []
        this.selectedType = ""
        this.card = false
        this.cardPokemon = {}
        this.offset = 0
        makeAutoObservable(this)
    }

    setCard(bool) {
        this.card = bool
    }

    setPokemons(array) {
        this.pokemons = array
    }

    setPokemon(data) {
        this.pokemons.push(data)
    }

    setSelectedType(type) {
        this.selectedType = type
    }

    setCardPokemon(pokemon) {
        this.cardPokemon = pokemon
    }

    setOffset(number) {
        this.offset = number
    }

    getCardPokemon() {
        return this.cardPokemon
    }

    getCard() {
        return this.card
    }

    getPokemons() {
        return this.pokemons
    }

    getSelectedPokemons() {
        let selected = []
        this.pokemons.map(pokemon =>
            pokemon.types.map(type => {
                if (type.type.name === this.selectedType.toLowerCase())
                    selected.push(pokemon)
            }))
        return selected
    }

    getOffset() {
        return this.offset
    }

    clean() {
        this.pokemons = []
    }

}
