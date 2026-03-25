import { createBrowserRouter } from 'react-router-dom';
import GenrePage from '../components/genre/GenrePage';
import MoviePage from '../components/movie/MoviePage';
import MovieForm from '../components/movie/MovieForm';
import Layout from '../components/layout/Layout';
import CinemaPage from '../components/cinemas/CinemaPage';

const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <GenrePage />,
                handle: {
                    title: "Genres"
                }
            },
            {
                path: 'genre',
                element: <GenrePage />,
                handle: {
                    title: "Genres"
                }
            },
            {
                path: 'movie/:genre',
                element: <MoviePage />,
                handle: {
                    title: "Movies"
                }
            },
            {
                path: 'movieForm/:genre/:movieId?',
                element: <MovieForm />,
                handle: {
                    title: "Movies Form"
                }
            },
            {
                path: 'cinemas',
                element: <CinemaPage />,
                handle: {
                    title: "Cinema Form"
                }
            }
        ]
    }
]);

export default router;