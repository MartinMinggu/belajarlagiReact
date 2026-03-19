import { createContext, useState } from "react"
import moviesData from "../components/data/movies";
import genresData from "../components/data/genres";
const CinemaContext = createContext({
    selectedGenre: null,
    selectedMovieId: null,
    genres: [],
    movies: [],
    nextMovieId: null,
    selectGenre: () => { },
    insertGenre: () => { },
    deleteGenre: () => { },
    selectMovie: () => { },
    selectMoviesByGenre: () => { },
    upsertMovie: () => { },
    deleteMovie: () => { },
    getSelectedMovie: () => { }
})
const CinemaProvider = ({ children }) => {
    const [cinema, setCinema] = useState({
        selectedGenre: null,
        selectedMovieId: null,
        genres: genresData,
        movies: moviesData,
        nextMovieId: 5
    });
    const selectGenre = genre => setCinema(prev => ({ ...prev, selectedGenre: genre }));

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
    const selectMovie = id => setCinema(prev => ({ ...prev, selectedMovieId: id }));
    const selectMoviesByGenre = () => cinema.movies.filter(movie => movie.genre === cinema.selectedGenre);
    const getSelectedMovie = () => cinema.movies.filter(movie => movie.id === cinema.selectedMovieId)[0];

    const upsertMovie = movie => {
        movie.genre = cinema.selectedGenre;
        console.log("movie ", movie);
        console.log("cinema.nextMovieId ", cinema.nextMovieId);
        if (!movie.id) {
            movie.id = parseInt(cinema.nextMovieId);
            setCinema(prev => {
                return {
                    ...prev,
                    selectedMovieId: null,
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
                    selectedMovieId: null,
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
        selectedGenre: cinema.selectedGenre,
        selectedMovieId: cinema.selectedMovieId,
        genres: cinema.genres,
        movies: cinema.movies,
        nextMovieId: cinema.nextMovieId,
        selectGenre,
        insertGenre,
        deleteGenre,
        selectMovie,
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