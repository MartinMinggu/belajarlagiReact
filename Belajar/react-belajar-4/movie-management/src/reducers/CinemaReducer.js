export default function CinemaReducer(state, { type, payload }) {
    switch (type) {
        case 'INSERT_GENRE':
            return insertGenre({ state, payload });
        case 'DELETE_GENRE':
            return deleteGenre({ state, payload });
        case 'UPSERT_MOVIE':
            return upsertMovie({ state, payload });
        case 'DELETE_MOVIE':
            return deleteMovie({ state, payload });
        case 'DELETE_CINEMA':
            return deleteCinema({ state, payload });
        case 'UPSERT_CINEMA':
            return upsertCinema({ state, payload });
        default:
            console.error('action type tidak diketahui');
            break;
    }
}
// KUMPULEAN FUNGSI ACTION, GET TETAP DARI CINEMACONTEXT
const insertGenre = ({ state, payload }) => {
    return { ...state, genres: [...state.genres, payload] }
}

const deleteGenre = ({ state, payload }) => {
    payload = payload.trim().toLowerCase();
    const selectedIndex = state.genres.findIndex(currentGenre => currentGenre === payload);
    const updatedGenres = [...state.genres];
    updatedGenres.splice(selectedIndex, 1);
    const updatedMovies = [...state.movies].filter(movie => movie.genre !== payload);
    return {
        ...state,
        genres: updatedGenres,
        movies: updatedMovies
    };
}

const upsertMovie = ({ state, payload }) => {

    // const isEmpty = Object.values(payload).some(value => !value);
    // if (isEmpty) {
    //     alert("Masih ada data yang kosong!");
    //     return;
    // }

    if (!payload.id) {
        payload.id = parseInt(state.nextMovieId);
        return {
            ...state,
            nextMovieId: state.nextMovieId + 1,
            movies: [...state.movies, payload]
        }
    } else {
        payload.id = parseInt(payload.id);
        const selectedIndex = state.movies.findIndex(mov => mov.id === payload.id);
        const updatedMovies = [...state.movies];
        updatedMovies.splice(selectedIndex, 1);
        updatedMovies.push(payload);
        return {
            ...state,
            movies: updatedMovies
        }
    }
}

const deleteMovie = ({ state, payload }) => {
    payload = parseInt(payload);
    const selectedIndex = state.movies.findIndex(movie => movie.id === payload);
    const updatedMovies = [...state.movies];
    updatedMovies.splice(selectedIndex, 1);
    return {
        ...state,
        movies: updatedMovies
    }
}

const deleteCinema = ({ state, payload }) => {
    const updatedCinemas = state.cinemas.filter(cin => cin.id !== parseInt(payload));
    return {
        ...state,
        cinemas: updatedCinemas
    }
}

const upsertCinema = ({ state, payload }) => {
    if (!payload.id) {
        payload.id = parseInt(state.nextCinemaId);
        return {
            ...state,
            nextCinemaId: state.nextCinemaId + 1,
            cinemas: [...state.cinemas, payload]
        }
    } else {
        payload.id = parseInt(payload.id);
        const selectedIndex = state.cinemas.findIndex(bios => bios.id === payload.id);
        const updatedBioskop = [...state.cinemas];
        updatedBioskop.splice(selectedIndex, 1);
        updatedBioskop.push(payload);
        return {
            ...state,
            cinemas: updatedBioskop
        }
    }
}
