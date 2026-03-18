import GenreForm from './GenreForm';
import GenreRow from './GenreRow';
import { CinemaContext } from '../../providers/CinemaContext'
import { useContext } from 'react';

function iterateGenres(genres) {
    // genres, selectedGenre, deleteGenre
    const elements = []
    for (let genre of genres) {
        elements.push(<GenreRow key={genre} name={genre} ></GenreRow>);
    }
    return (<>{elements}</>);
}

export default function GenrePage() {
    const { genres } = useContext(CinemaContext);
    return (
        <>
            <GenreForm></GenreForm>
            {iterateGenres(genres)}
        </>
    );
}