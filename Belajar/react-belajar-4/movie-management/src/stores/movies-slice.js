
import { createSlice } from "@reduxjs/toolkit";

import moviesData from '../data/movies';

const slice = createSlice({
    name: 'movies',
    initialState: {
        movies: moviesData,
        nextMovieId: 5
    }, reducers: {
        upsert(state, action) {
            const { payload } = action;
            if (!payload.id) {
                payload.id = parseInt(state.nextMovieId);
                state.nextMovieId++;
                state.movies.push(payload)
            } else {
                payload.id = parseInt(payload.id);
                const selectedIndex = state.movies.findIndex(mov => mov.id === payload.id);
                state.movies[selectedIndex] = payload;
            }
        },
        delete(state, action) {
            let { payload } = action;
            payload = parseInt(payload);
            const selectedIndex = state.movies.findIndex(currentMovie => currentMovie.id === payload);
            state.movies.splice(selectedIndex, 1);
        },
        deleteByGenre(state, action) { 
            let {payload } = action;
            payload = payload.trim().toLowerCase();
            state.movies = state.movies.filter(movie => movie.genre !== payload);
        }
    }
});
export const movieAction = slice.actions;
export const movieReducer = slice.reducer;