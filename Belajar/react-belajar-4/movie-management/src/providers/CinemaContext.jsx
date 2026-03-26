import { createContext, useReducer, useState } from "react"
import moviesData from "../components/data/movies";
import genresData from "../components/data/genres";
import cinemasData from "../components/data/cinemas"
import CinemaReducer from "../reducers/CinemaReducer";
const CinemaContext = createContext({
    genres: [],
    movies: [],
    cinemas: [],
    nextMovieId: null,
    nextCinemaId: null,
    insertGenre: () => { },
    deleteGenre: () => { },
    selectMoviesByGenre: () => { },
    upsertMovie: () => { },
    deleteMovie: () => { },
    getSelectedMovie: () => { },
    getSelectedCinema: () => { },
    deleteCinema: () => { },
    upsertCinema: () => { },
})
const CinemaProvider = ({ children }) => {
    // PENGGANTI STATE
    const [cinema, cinemaDispatch] = useReducer(CinemaReducer, {
        genres: genresData,
        movies: moviesData,
        cinemas: cinemasData,
        nextMovieId: 5,
        nextCinemaId: 4,
    });

    // Genre Provider
    const insertGenre = genre => {
        genre = genre.trim().toLowerCase();
        const isExist = cinema.genres.includes(genre);
        if (!isExist) {
            cinemaDispatch({ type: "INSERT_GENRE", payload: genre })
        } else {
            alert('Genre is already exist, input another one.');
        }
    }
    const deleteGenre = genre => cinemaDispatch({ type: "DELETE_GENRE", payload: genre })

    // Movies Provider
    const selectMoviesByGenre = genre => cinema.movies.filter(movie => movie.genre === genre);
    const getSelectedMovie = id => cinema.movies.filter(movie => movie.id === parseInt(id))[0];
    const upsertMovie = movie => cinemaDispatch({ type: "UPSERT_MOVIE", payload: movie })
    const deleteMovie = movieId => cinemaDispatch({ type: "DELETE_MOVIE", payload: movieId })

    // Cinema Provider
    const getSelectedCinema = id => cinema.cinemas.filter(bioskop => bioskop.id === parseInt(id))[0];
    const deleteCinema = cinemaId => cinemaDispatch({ type: "DELETE_CINEMA", payload: cinemaId })
    const upsertCinema = bioskop => cinemaDispatch({ type: "UPSERT_CINEMA", payload: bioskop })

    // CONTEXT
    const contextValue = {
        genres: cinema.genres,
        movies: cinema.movies,
        cinemas: cinema.cinemas,
        nextMovieId: cinema.nextMovieId,
        insertGenre,
        deleteGenre,
        selectMoviesByGenre,
        upsertMovie,
        deleteMovie,
        getSelectedMovie,
        getSelectedCinema,
        deleteCinema,
        upsertCinema
    };

    return (
        <CinemaContext.Provider value={contextValue}>
            {children}
        </CinemaContext.Provider>
    )
}
export { CinemaContext, CinemaProvider };