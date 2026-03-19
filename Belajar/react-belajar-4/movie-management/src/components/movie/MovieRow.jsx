import SimpleCard from '../ui-element/SimpleCard';
import BaseButton from '../ui-element/BaseButton';
import { CinemaContext } from '../../providers/CinemaContext';
import { useContext } from 'react';

export default function MovieRow({ movie }) {
    console.log('movie row terpangggil');
    
    console.log(movie);
    

    const { selectMovie, deleteMovie } = useContext(CinemaContext);
    const { id, title, duration, production, status, rating, summary } = movie;

    const statusLabel = status => {
        switch (status) {
            case 'NS':
                return 'Not Showing';
            case 'CS':
                return 'Coming Soon';
            case 'NP':
                return 'Now Playing';
            default:
                return 'Not Applicable';
        }
    }

    const ratingLabel = rating => {
        switch (rating) {
            case 'G':
                return 'General Audiences';
            case 'PG':
                return 'Parental Guidance';
            case 'PG13':
                return 'Parents Strongly Cautioned';
            case 'R':
                return 'Restriced';
            case 'NC17':
                return 'No Children Under 17';
            case 'M18':
                return 'Mature 18';
            case 'R21':
                return 'Restricted 21 or Above';
            default:
                return 'Not Applicable';
        }
    }

    return (
        <SimpleCard>
            <div className='two-side'>
                <div className="left">
                    <div className="property title">{title}</div>
                    <div className="property duration">{duration}</div>
                    <div className="property status">{statusLabel(status)}</div>
                    <div className="property rating">{ratingLabel(rating)}</div>
                    <div className="property production">{production}</div>
                </div>
                <div className="right">
                    <div className="button-container">
                        <BaseButton type="button" onClick={() => selectMovie(id)}>Edit</BaseButton>
                        <BaseButton type="button" onClick={() => deleteMovie(id)}>Delete</BaseButton>
                    </div>
                    <div>
                        <div className="property summary">{summary}</div>
                    </div>
                </div>
            </div>
        </SimpleCard>
    );
}