import { createContext, useState } from "react"
import moviesData from "../components/data/movies";
import genresData from "../components/data/genres";
import cinemasData from "../components/data/cinemas"
const CinemaContext = createContext({
    genres: [],
    movies: [],
    cinemas: [],
    nextMovieId: null,
    insertGenre: () => { },
    deleteGenre: () => { },
    selectMoviesByGenre: () => { },
    upsertMovie: () => { },
    deleteMovie: () => { },
    getSelectedMovie: () => { }
})
const CinemaProvider = ({ children }) => {
    const [cinema, setCinema] = useState({
        selectedGenre: null,
        genres: genresData,
        movies: moviesData,
        cinemas: cinemasData,
        nextMovieId: 5
    });

    const insertGenre = genre => {
        genre = genre.trim().toLowerCase();
        const isExist = cinema.genres.includes(genre);
        if (!isExist) {
            setCinema(prev => ({ ...prev, genres: [...prev.genres, genre] }));
        } else {
            alert('Genre is already exist, input another one.');
        }
    }

    const deleteGenre = genre => {
        genre = genre.trim().toLowerCase();
        setCinema(prev => {
            const selectedIndex = prev.genres.findIndex(currentGenre => currentGenre === genre);
            const updatedGenres = [...prev.genres];
            updatedGenres.splice(selectedIndex, 1);
            const updatedMovies = [...prev.movies].filter(movie => movie.genre !== genre);
            return {
                ...prev,
                genres: updatedGenres,
                movies: updatedMovies
            };
        });
    }
    const selectMoviesByGenre = genre => cinema.movies.filter(movie => movie.genre === genre);
    const getSelectedMovie = id => cinema.movies.filter(movie => movie.id === parseInt(id))[0];

    const upsertMovie = movie => {
        console.log("movie ", movie);
        console.log("cinema.nextMovieId ", cinema.nextMovieId);
        const isEmpty = Object.values(movie).some(value => !value);

        if (isEmpty) {
            alert("Masih ada data yang kosong!");
            return;
        }
        if (!movie.id) {
            movie.id = parseInt(cinema.nextMovieId);
            setCinema(prev => {
                return {
                    ...prev,
                    nextMovieId: prev.nextMovieId + 1,
                    movies: [...prev.movies, movie]
                }
            });
        } else {
            movie.id = parseInt(movie.id);
            setCinema(prev => {
                const selectedIndex = prev.movies.findIndex(mov => mov.id === movie.id);
                const updatedMovies = [...prev.movies];
                updatedMovies.splice(selectedIndex, 1);
                updatedMovies.push(movie);
                return {
                    ...prev,
                    movies: updatedMovies
                }
            });
        }
    }

    const deleteMovie = movieId => {
        movieId = parseInt(movieId);
        setCinema(prev => {
            const selectedIndex = prev.movies.findIndex(movie => movie.id === movieId);
            const updatedMovies = [...prev.movies];
            updatedMovies.splice(selectedIndex, 1);
            return {
                ...prev,
                movies: updatedMovies
            }
        });
    }

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
        getSelectedMovie
    };
    return (
        <CinemaContext.Provider value={contextValue}>
            {children}
        </CinemaContext.Provider>
    )
}
export { CinemaContext, CinemaProvider };