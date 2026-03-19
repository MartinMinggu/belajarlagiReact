import MovieRow from './MovieRow';
import BaseButton from '../ui-element/BaseButton';
import ButtonContainer from '../ui-element/ButtonContainer';
import { CinemaContext } from '../../providers/CinemaContext';
import { useContext } from 'react';

function iterateMovies(movies){
    let elements = [];
    console.log(movies);
    
    for(let movie of movies){
        console.log("movie ", movie);
        
        elements.push(<MovieRow key={movie.id} movie={movie}></MovieRow>);
    }
    return (<>{elements}</>)
}

export default function MoviePage(){
    const {selectGenre, selectMovie, selectMoviesByGenre, selectedGenre } = useContext(CinemaContext);
    console.log(selectedGenre);
    
    
    return (
        <>
            <ButtonContainer>
                <BaseButton type="button" onClick={() => selectGenre(null)}>Back to Genre List</BaseButton>
                <BaseButton type="button" onClick={() => selectMovie(0)}>New Movie</BaseButton>
            </ButtonContainer>
            {iterateMovies(selectMoviesByGenre(selectedGenre))}
        </>
    );
}