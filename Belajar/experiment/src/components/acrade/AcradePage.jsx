import AcradeForm from './AcradeForm';
import ArcadeTable from './ArcadeTable'
import arcades from "../../data/arcades.js";
import { useState } from 'react';

export default function AcradePage() {
    const [arcadesData, setArcadesData] = useState(arcades);
    const [nextId, setNextId] = useState(6);
    function submitAcrade(input) {
        // console.log(input);
        // const last = arcadesData.findLast();
        // console.log(last);
        
        // const newInput = {
        //     ...input,
        //     id: Math.floor(Math.random() * 100) + 1
        // }
        // console.log(newInput);

        // setArcadesData(data => [
        //     ...data,
        //     newInput
        // ]);
        // setPerson(prevPerson => ({ ...prevPerson, job: jobRef.current.value }))
        input.id = nextId;
        setNextId(prev => prev+1);
        setArcadesData(prev => [...prev, input]);
    }
    const handleDelete = id => {
        // const newData = arcadesData.filter(x => x.id != id);
        // setArcadesData(newData);
        setArcadesData(prev => {
            const index = prev.findIndex(arcade => arcade.id === id);
            let updatedArcades = [...prev];
            updatedArcades.splice(index, 1);
            return updatedArcades;
        })
        alert(`arcade dengan id ${id} berhasil dihapus`);
    }
    return (<>
        <ArcadeTable arcades={arcadesData} handleDelete={handleDelete}></ArcadeTable>
        <AcradeForm submitAcrade={submitAcrade} />
    </>);
}