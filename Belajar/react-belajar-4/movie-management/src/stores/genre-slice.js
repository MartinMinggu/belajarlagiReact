import { createSlice } from "@reduxjs/toolkit";

import genresData from '../data/genres';

const slice = createSlice({
    name: 'movie',
    initialState: {
        genres: genresData
    },
    reducers: {
        insert(state, action) {
            state.genres.push(action.payload);
        },
        delete(state, action) {
            let { payload } = action;
            payload = payload.trim().toLowerCase();
            debugger;
            const selectedIndex = state.genres.findIndex(currentGenre => currentGenre=== payload);
            state.genres.splice(selectedIndex, 1);
        }
    }
});
export const genreAction = slice.actions;
export const genreReducer = slice.reducer;