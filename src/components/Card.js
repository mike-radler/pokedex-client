import React, {useContext} from 'react';
import "../style/card.scss"
import {Context} from "../index";

const Card = ({pokemon}) => {
    const {PokemonStore} = useContext(Context)
    const cardName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    const cardTypes = pokemon.types.map(slot => slot.type.name.charAt(0).toUpperCase() +slot.type.name.slice(1))
    const cardImg = pokemon.sprites.front_default

    const setClickedCard = (pokemon) => {
        PokemonStore.setCard(true)
        PokemonStore.setCardPokemon(pokemon)
    }

    return (
        <div onClick={() => setClickedCard(pokemon)} className="card">
            <img className="card__img" src={cardImg}/>
            <div className="card__name">{cardName}</div>
            {cardTypes.map(type =>
                <div key={type} className="card__type">{type}</div>
            )}
        </div>
    );
};

export default Card;