import SimpleCard from '../ui-element/SimpleCard';
import BaseButton from '../ui-element/BaseButton';
import { CinemaContext } from '../../providers/CinemaContext'
import { useContext } from 'react';

export default function GenreRow({name}){
        const { selectGenre, deleteGenre } = useContext(CinemaContext);

    return (
        <SimpleCard>
            <div className='space-between'>
                <span>{name}</span>
                <div>
                    <BaseButton type="button" onClick={() => deleteGenre(name)}>Delete</BaseButton>
                    <BaseButton type="button" onClick={() => selectGenre(name)}>Movies</BaseButton>
                </div>
            </div>
        </SimpleCard>
    );
}