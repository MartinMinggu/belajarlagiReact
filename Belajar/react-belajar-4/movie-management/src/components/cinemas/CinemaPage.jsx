import BaseButton from '../ui-element/BaseButton';
import ButtonContainer from '../ui-element/ButtonContainer';
import { CinemaContext } from '../../providers/CinemaContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CinemaRow from './CinemaRow';

function iterateCinema(cinemas) {
    let elements = [];
    console.log("cinemas = ", cinemas );
    

    for (let cinema of cinemas) {
        elements.push(<CinemaRow key={cinema.id} {...cinema}></CinemaRow>);
    }
    return (<>{elements}</>)
}

export default function CinemaPage() {
    const { cinemas } = useContext(CinemaContext);
    return (
        <>
            <ButtonContainer>
                <BaseButton as={Link} to={`/cinema/}`}>New Cinema</BaseButton>
            </ButtonContainer>
            {iterateCinema(cinemas)}
        </>
    );
}