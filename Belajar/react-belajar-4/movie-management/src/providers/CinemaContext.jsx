import { createContext, useState } from "react"
import moviesData from "../components/data/movies";
import genresData from "../components/data/genres";
import cinemasData from "../components/data/cinemas"
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
    const [cinema, setCinema] = useState({
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
    // Movies Provider
    const selectMoviesByGenre = genre => cinema.movies.filter(movie => movie.genre === genre);
    const getSelectedMovie = id => cinema.movies.filter(movie => movie.id === parseInt(id))[0];

    const upsertMovie = movie => {
        console.log("movie ", movie);
        console.log("cinema.nextMovieId ", cinema.nextMovieId);

        // cek kosong
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

    // Cinema Provider
    const getSelectedCinema = id => cinema.cinemas.filter(bioskop => bioskop.id === parseInt(id))[0];

    const deleteCinema = cinemaId => {
        setCinema(prev => {
            const updatedCinemas = prev.cinemas.filter(cin => cin.id !== parseInt(cinemaId));
            return {
                ...prev,
                cinemas: updatedCinemas
            }
        });
    }
    const upsertCinema = bioskop => {

        const isEmpty = Object.values(bioskop).some(value => !value);

        if (isEmpty) {
            alert("Masih ada data yang kosong!");
            return;
        }

        if (!bioskop.id) {
            bioskop.id = parseInt(cinema.nextCinemaId);
            setCinema(prev => {
                return {
                    ...prev,
                    nextCinemaId: prev.nextCinemaId + 1,
                    cinemas: [...prev.cinemas, bioskop]
                }
            });
        } else {
            bioskop.id = parseInt(bioskop.id);
            setCinema(prev => {
                const selectedIndex = prev.cinemas.findIndex(bios => bios.id === bioskop.id);
                const updatedBioskop = [...prev.cinemas];
                updatedBioskop.splice(selectedIndex, 1);
                updatedBioskop.push(bioskop);
                return {
                    ...prev,
                    cinemas: updatedBioskop
                }
            });
        }
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