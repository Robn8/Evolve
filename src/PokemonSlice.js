import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    xp: 0,
    level: 1,
    pokemon: 'Pikachu',
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        gainXp: (state) => {
            state.xp += 1;
            if (state.xp >= 5) {
                state.level +=1;
                state.xp = 0;
                state.pokemon = state.level === 2 ? 'Raichu' : 'Pikachu';
            }
        },
    },
});

export const { gainXp } = pokemonSlice.actions;

export default pokemonSlice.reducer;