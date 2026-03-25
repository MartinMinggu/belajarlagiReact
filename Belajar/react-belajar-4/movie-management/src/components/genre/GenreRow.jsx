import SimpleCard from '../ui-element/SimpleCard';
import BaseButton from '../ui-element/BaseButton';
import { CinemaContext } from '../../providers/CinemaContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function GenreRow({ name }) {
    const { deleteGenre } = useContext(CinemaContext);

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