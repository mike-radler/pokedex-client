import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PokemonStore from "./store/PokemonStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        PokemonStore: new PokemonStore()
    }}>
        <App />
    </Context.Provider>
);

