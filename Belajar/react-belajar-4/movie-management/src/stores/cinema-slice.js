

import { createSlice } from "@reduxjs/toolkit";

import cinemasData from '../data/cinemas';

const slice = createSlice({
    name: 'cinema',
    initialState: {
        cinemas: cinemasData,
        nextCinemaId: 4
    },
    reducers: {
        upsert(state, action) {
            const { payload } = action;
            if (!payload.id) {
                payload.id = parseInt(state.nextCinemaId);
                state.nextCinemaId++;
                state.cinemas.push(payload)
            } else {
                payload.id = parseInt(payload.id);
                const selectedIndex = state.cinemas.findIndex(cin => cin.id === payload.id);
                state.cinemas[selectedIndex] = payload;
            }
        },
        delete(state, action) {
            let { payload } = action;
            payload = parseInt(payload);
            const selectedIndex = state.cinemas.findIndex(cin => cin.id === payload);
            state.cinemas.splice(selectedIndex, 1);
        },
    }
});
export const cinemaAction = slice.actions;
export const cinemaReducer = slice.reducer;