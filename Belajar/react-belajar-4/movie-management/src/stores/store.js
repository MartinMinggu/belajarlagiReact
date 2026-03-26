import { configureStore } from '@reduxjs/toolkit'
import { genreReducer } from './genre-slice';
import { movieReducer } from './movies-slice';
import { cinemaReducer } from './cinema-slice';
const store = configureStore(
    {
        reducer:{
            genre: genreReducer,
            movie: movieReducer,
            cinema: cinemaReducer
        }
    }
);
export default store;