import "./style/app.scss"
import ClickedCard from "./components/ClickedCard";
import React, {useContext, useEffect, useState} from "react";
import {fetchPokemon} from "./http/pokeAPI";
import CardList from "./components/CardList";
import {Context} from "./index";
import Filter from "./components/Filter";

function App() {
    const {PokemonStore} = useContext(Context)
    useEffect(() => {
        for (let i = 1; i < 13; i++) {
            fetchPokemon(i).then(data => {
                PokemonStore.setPokemon(data)
            })
        }
        PokemonStore.setOffset(12)
    }, [])

    const load = () => {
        PokemonStore.setSelectedType('')
        PokemonStore.clean()
        for (let i = 1; i < 13; i++) {
            fetchPokemon(i + PokemonStore.getOffset()).then(data => {
                PokemonStore.setPokemon(data)
            })
        }
        PokemonStore.setOffset(PokemonStore.getOffset() + 12)
    }

    return (
        <div className="App">
            <div className="container header">
                <header>
                    <h1>Pokedex</h1>
                </header>
            </div>
            <Filter/>
            <div className="container">
                <div className="item-wrapper">

                    <CardList/>
                    <div className="button-wrapper">
                        <button onClick={load}>Load More</button>
                    </div>
                </div>
                <ClickedCard/>
            </div>
        </div>
    );
}

export default App;
