import SimpleCard from '../ui-element/SimpleCard';
import BaseButton from '../ui-element/BaseButton';

export default function GenreRow({name, selectGenre, deleteGenre}){
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