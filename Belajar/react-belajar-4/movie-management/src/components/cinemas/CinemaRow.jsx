import SimpleCard from '../ui-element/SimpleCard';
import BaseButton from '../ui-element/BaseButton';
import { CinemaContext } from '../../providers/CinemaContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function CinemaRow({ id, name, location} ) {
    // const { deleteCinema } = useContext(CinemaContext);
  
    return (
        <SimpleCard>
           <div className='space-between'>
                <span>{name} - {location}</span>
                <div>
                    <BaseButton as={Link} to={`cinemaForm/${id}`} type="button">Edit</BaseButton>
                    <BaseButton onClick={() => deleteCinema(id)} type="button">Delete</BaseButton>
                </div>
            </div>
        </SimpleCard>
    );
}