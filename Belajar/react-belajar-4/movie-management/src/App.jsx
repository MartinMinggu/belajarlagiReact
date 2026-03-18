import Layout from './components/layout/Layout';
import PageHeader from './components/layout/PageHeader';
import GenrePage from './components/genre/GenrePage';
import MoviePage from './components/movie/MoviePage';
import MovieForm from './components/movie/MovieForm';
import { CinemaContext } from './providers/CinemaContext.jsx'
import { useContext } from 'react';

function App() {
  const { selectedGenre, selectedMovieId } = useContext(CinemaContext);

  // const backToGenre = () => setCinema(prev => ({...prev, selectedGenre: null}));


  // const openMovieForm = id => setCinema(prev => ({...prev, selectedMovieId:id}));
  // const cancelMovieForm = () => setCinema(prev => ({...prev, selectedMovieId:null}));


  const getTitle = () => (selectedGenre === null) ? 'Genre List' : `${selectedGenre} Movies`;

  const switchPage = () => {
    if (selectedGenre === null) {
      return (
        <GenrePage />
      );
    } else if (selectedGenre !== null && selectedMovieId === null) {
      return (
        <MoviePage />
      );
    } else if (selectedGenre !== null && selectedMovieId !== null) {
      return (
        <MovieForm />
      );
    }
  }

  return (
    <Layout title={getTitle()}>
      {switchPage()}
    </Layout>
  )
}

export default App
