import GenreForm from './GenreForm';
import GenreRow from './GenreRow';
import { useSelector } from 'react-redux'

function iterateGenres(genres) {
    // genres, selectedGenre, deleteGenre
    const elements = []
    for (let genre of genres) {
        elements.push(<GenreRow key={genre} name={genre} ></GenreRow>);
    }
    return (<>{elements}</>);
}

export default function GenrePage() {
    const genres = useSelector(state => state.genre.genres);
    return (
        <>
            <GenreForm></GenreForm>
            {iterateGenres(genres)}
        </>
    );
}

// Promise dan ajax