import React, {useContext, useState} from 'react';
import "../style/card.scss"
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const ClickedCard = observer(() => {
    const {PokemonStore} = useContext(Context)
    const pokemon = PokemonStore.getCardPokemon()
    return (
        <div className="item-info">
            {
                PokemonStore.getCard() ?
                    <div className="clicked_card">
                        <img onClick={()=>PokemonStore.setCard(false)} className="clicked_card__close" src="https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png"/>
                        <img src={pokemon.sprites.front_default} className="clicked_card__img"></img>
                        <b className="clicked_card__name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) + '  #' + pokemon.id}</b>
                        <div>
                            <div className="clicked_card__stats_container">
                                <div className="clicked_card__stat">Type</div>
                                <div className="clicked_card__value">{pokemon.types[0].type.name.charAt(0).toUpperCase() +pokemon.types[0].type.name.slice(1)}</div>
                            </div>
                            <div className="clicked_card__stats_container">
                                <div className="clicked_card__stat">Attack</div>
                                <div className="clicked_card__value">{pokemon.stats[1].base_stat}</div>
                            </div>
                            <div className="clicked_card__stats_container">
                                <div className="clicked_card__stat">Defence</div>
                                <div className="clicked_card__value">{pokemon.stats[2].base_stat}</div>
                            </div>
                            <div className="clicked_card__stats_container">
                                <div className="clicked_card__stat">HP</div>
                                <div className="clicked_card__value">{pokemon.stats[0].base_stat}</div>
                            </div>
                            <div className="clicked_card__stats_container">
                                <div className="clicked_card__stat">SP Attack</div>
                                <div className="clicked_card__value">{pokemon.stats[3].base_stat}</div>
                            </div>
                            <div className="clicked_card__stats_container">
                                <div className="clicked_card__stat">SP Defense</div>
                                <div className="clicked_card__value">{pokemon.stats[4].base_stat}</div>
                            </div>
                            <div className="clicked_card__stats_container">
                                <div className="clicked_card__stat">Speed</div>
                                <div className="clicked_card__value">{pokemon.stats[5].base_stat}</div>
                            </div>
                            <div className="clicked_card__stats_container">
                                <div className="clicked_card__stat">Weight</div>
                                <div className="clicked_card__value">{pokemon.weight}</div>
                            </div>
                            <div className="clicked_card__stats_container">
                                <div className="clicked_card__stat">Total moves</div>
                                <div className="clicked_card__value">{pokemon.moves.length}</div>
                            </div>
                        </div>
                    </div>
                    : ''
            }
        </div>
    );
});

export default ClickedCard;