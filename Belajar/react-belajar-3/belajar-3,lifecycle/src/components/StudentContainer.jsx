import { useEffect, useState } from 'react';
import students from '../data/student.js';
export default function StudentContainer() {
    const [selectedId, setSelectedId] = useState(1);
    const [student, setStudent] = useState({});
    const finById = id => students.filter(stud => stud.id == id)[0];
    const handleSwitch = value => setSelectedId(value);

    useEffect(() => {
        setStudent(finById(selectedId));
    }, [selectedId])

    return <>
        <div className="wrapper">
            <div>
                <label htmlFor="studentId"> Student Id</label>
                <select onChange={() => handleSwitch(event.target.value)} name="studentId" id="studentId" className="dropdown">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="display-container">
                <div>id: {student.id} </div>
                <div>name: {student.nama}</div>
                <div>uneversity: {student.university} </div>
            </div>
        </div>
    </>;
}