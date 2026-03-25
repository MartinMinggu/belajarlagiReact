import { createBrowserRouter } from 'react-router-dom';
import GenrePage from '../components/genre/GenrePage';
import MoviePage from '../components/movie/MoviePage';
import MovieForm from '../components/movie/MovieForm';
import Layout from '../components/layout/Layout';
import CinemaPage from '../components/cinemas/CinemaPage';
import CinemaForm from '../components/cinemas/CinemaForm';

const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <GenrePage />,
                loader : () => ({title: "Genres"})
            },
            {
                path: 'genre',
                element: <GenrePage />,
                loader : () => ({title: "Genres"})
            },
            {
                path: 'movie/:genre',
                element: <MoviePage />,
                loader : context => ({title: `${context.params.genre} Movies` })
            },
            {
                path: 'movieForm/:genre/:movieId?',
                element: <MovieForm />,
                loader : context => ({title: `${context.params.genre} Movies Form` })
            },
            {
                path: 'cinemas',
                element: <CinemaPage />,
                loader : () => ({title: `Cinemas` })
            },
            {
                path: 'cinemaForm/:cinemaId?',
                element: <CinemaForm />,
                loader : () => ({title: `Cinema Form` })
            },
        ]
    }
]);

export default router;