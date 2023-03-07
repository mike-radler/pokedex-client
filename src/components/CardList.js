import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import Card from "./Card";
import "../style/card.scss"
import {Context} from "../index";
import {values} from "mobx";

const CardList = observer(() => {
    const {PokemonStore} = useContext(Context)
    return (
        <div className="card_list">
            {PokemonStore.selectedType ?
                PokemonStore.getSelectedPokemons().map(pokemon =>
                    <Card key={pokemon.id} pokemon={pokemon}/>)
                :
                PokemonStore.getPokemons().map(pokemon =>
                    <Card key={pokemon.id} pokemon={pokemon}/>)
            }
        </div>
    );
});

export default CardList;