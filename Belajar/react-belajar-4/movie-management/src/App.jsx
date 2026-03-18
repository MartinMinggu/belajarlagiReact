import {useState} from 'react';
import Layout from './components/layout/Layout';
import PageHeader from './components/layout/PageHeader';
import GenrePage from './components/genre/GenrePage';
import MoviePage from './components/movie/MoviePage';
import genresData from './components/data/genres';
import moviesData from './components/data/movies';
import MovieForm from './components/movie/MovieForm';

function App() {

  const [cinema, setCinema] = useState({
    selectedGenre: null,
    selectedMovieId: null,
    genres: genresData,
    movies: moviesData,
    nextMovieId: 5
  })

  const selectGenre = genre => setCinema(prev => ({...prev, selectedGenre: genre}));
  const backToGenre = () => setCinema(prev => ({...prev, selectedGenre: null}));

  const insertGenre = genre => {
    genre = genre.trim().toLowerCase();
    if(genre === ''){
      alert('You cannot insert empty genre.');
      return;
    }
    const isExist = cinema.genres.includes(genre);
    if(!isExist){
      setCinema(prev => ({...prev, genres: [...prev.genres, genre]}));
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

  const openMovieForm = id => setCinema(prev => ({...prev, selectedMovieId:id}));
  const cancelMovieForm = () => setCinema(prev => ({...prev, selectedMovieId:null}));

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

  const insertMovie = movie => {
    movie.id = cinema.nextMovieId;
    movie.genre = cinema.selectedGenre;
    setCinema(prev => {
      return {
        ...prev,
        selectedMovieId: null,
        nextMovieId: prev.nextMovieId + 1,
        movies: [...prev.movies, movie]
      }
    });
  }

  const getTitle = () => (cinema.selectedGenre === null) ? 'Genre List' : `${cinema.selectedGenre} Movies`;

  const switchPage = () => {
    let {selectedGenre, selectedMovieId, genres, movies} = cinema;
    if(selectedGenre === null){
      return (
        <GenrePage 
          genres={genres} 
          selectGenre={selectGenre} 
          insertGenre={insertGenre} 
          deleteGenre={deleteGenre}>
        </GenrePage>
      );
    } else if ( selectedGenre !== null && selectedMovieId === null){
      movies = movies.filter(movie => movie.genre === selectedGenre);
      return (
        <MoviePage 
          deleteMovie={deleteMovie} 
          openMovieForm={openMovieForm} 
          movies={movies} 
          backToGenre={backToGenre}>
        </MoviePage>
      );
    } else if (selectedGenre !== null && selectedMovieId !== null){
      return (
        <MovieForm 
          selectedMovieId={selectedMovieId} 
          cancelMovieForm={cancelMovieForm} 
          insertMovie={insertMovie}>
        </MovieForm>
      );
    }
  }

  return (
    <Layout pageHeader={<PageHeader title={getTitle()}></PageHeader>}>
      {switchPage()}
    </Layout>
  )
}

export default App
