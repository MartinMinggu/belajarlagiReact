import { useEffect } from "react"

export default function EmployeeContainer({ bilangan, handleTambahAngka }) {
    // console.log('EmployeeContainer side effect');

    useEffect(() => {
        console.log('EmployeeContainer use effect');

    }, [bilangan])


    return (<>
        <h2>{bilangan}</h2>
        <div>
            <button type='button' onClick={handleTambahAngka}> Tambah Angka</button>
        </div>

    </>)
}