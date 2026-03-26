import SimpleCard from '../ui-element/SimpleCard';
import BaseButton from '../ui-element/BaseButton';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { genreAction } from '../../stores/genre-slice';
import { movieAction } from '../../stores/movies-slice';

export default function GenreRow({ name }) {
    const dispacth = useDispatch();
    const deleteGenre = name => {
        dispacth(genreAction.delete(name));
        dispacth(movieAction.deleteByGenre(name));
    }

    return (
        <SimpleCard>
            <div className='space-between'>
                <span>{name}</span>
                <div>
                    <BaseButton type="button" onClick={() => deleteGenre(name)}>Delete</BaseButton>
                    <BaseButton as={Link} to={`/movie/${name}`}>Movies</BaseButton>
                </div>
            </div>
        </SimpleCard>
    );
}