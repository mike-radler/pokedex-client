import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Filter = observer(() => {
    const {PokemonStore} = useContext(Context)
    let types = PokemonStore.getPokemons().map(pokemon => pokemon.types.map(slot => slot.type.name.charAt(0).toUpperCase() + slot.type.name.slice(1)))
    let filterTypes = []
    types.map(type =>
        type.map(value =>
            filterTypes.push(value)
        )
    )
    filterTypes = Array.from(new Set(filterTypes))
    const click = (type) => {
        PokemonStore.setSelectedType(type)
        console.log(PokemonStore.selectedType)
        console.log(PokemonStore.getSelectedPokemons())
    }
    return (
        <div className="filter">
            <div className="dropdown">
                <button className="dropdown-menu-btn">{PokemonStore.selectedType?PokemonStore.selectedType:'Fillter'}</button>
                <div className="dropdown-child">
                    {filterTypes.map(type =>
                        <a key={type} onClick={() => click(type)}>
                            {type}
                        </a>
                    )}
                    <a onClick={()=>PokemonStore.setSelectedType('')}>Clean</a>
                </div>
            </div>
        </div>
    );
});

export default Filter;