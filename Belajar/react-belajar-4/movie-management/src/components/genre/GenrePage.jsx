import GenreForm from './GenreForm';
import GenreRow from './GenreRow';

function iterateGenres(genres, selectedGenre, deleteGenre){
    const elements = []
    for(let genre of genres){
        elements.push(<GenreRow key={genre} name={genre} selectGenre={selectedGenre} deleteGenre={deleteGenre}></GenreRow>);
    }
    return (<>{elements}</>);
}

export default function GenrePage({genres, selectGenre, insertGenre, deleteGenre}){
    return (
        <>
            <GenreForm insertGenre={insertGenre}></GenreForm>
            {iterateGenres(genres, selectGenre, deleteGenre)}
        </>
    );
}