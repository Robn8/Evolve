import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from './PokemonSlice';

const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
    },
});

export default store;