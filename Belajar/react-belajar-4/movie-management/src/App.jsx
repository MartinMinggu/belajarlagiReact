import Layout from './components/layout/Layout';
import GenrePage from './components/genre/GenrePage';
import MoviePage from './components/movie/MoviePage';
import MovieForm from './components/movie/MovieForm';
import { CinemaContext } from './providers/CinemaContext.jsx'
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx';

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
