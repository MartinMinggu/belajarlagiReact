import MovieRow from './MovieRow';
import BaseButton from '../ui-element/BaseButton';
import ButtonContainer from '../ui-element/ButtonContainer';

function iterateMovies(deleteMovie, openMovieForm, movies){
    let elements = [];
    for(let movie of movies){
        elements.push(<MovieRow key={movie.id} movie={movie} openMovieForm={openMovieForm} deleteMovie={deleteMovie}></MovieRow>);
    }
    return (<>{elements}</>)
}

export default function MoviePage({deleteMovie, openMovieForm, movies, backToGenre}){
    return (
        <>
            <ButtonContainer>
                <BaseButton type="button" onClick={backToGenre}>Back to Genre List</BaseButton>
                <BaseButton type="button" onClick={() => openMovieForm(0)}>New Movie</BaseButton>
            </ButtonContainer>
            {iterateMovies(deleteMovie, openMovieForm, movies)}
        </>
    );
}