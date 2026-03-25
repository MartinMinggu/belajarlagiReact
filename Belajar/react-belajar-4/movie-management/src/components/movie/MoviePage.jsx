import MovieRow from './MovieRow';
import BaseButton from '../ui-element/BaseButton';
import ButtonContainer from '../ui-element/ButtonContainer';
import { CinemaContext } from '../../providers/CinemaContext';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

function iterateMovies(movies) {
    let elements = [];

    for (let movie of movies) {
        elements.push(<MovieRow key={movie.id} movie={movie}></MovieRow>);
    }
    return (<>{elements}</>)
}

export default function MoviePage() {
    const { genre } = useParams();
    const { selectMoviesByGenre } = useContext(CinemaContext);
    return (
        <>
            <ButtonContainer>
                <BaseButton as={Link} to="/genre">Back to Genre List</BaseButton>
                <BaseButton as={Link} to={`/movieForm/${genre}`}>New Movie</BaseButton>
            </ButtonContainer>
            {iterateMovies(selectMoviesByGenre(genre))}
        </>
    );
}