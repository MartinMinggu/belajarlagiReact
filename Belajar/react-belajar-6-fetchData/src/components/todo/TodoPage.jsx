import axios from "axios";
import { useEffect, useState } from "react";
import Todo from "./todo";

export default function TodoPage({ id, username }) {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const requestUser = async () => {
            let { data } = await axios.get(`/users/${id}/todos`);
            data = !data.length ? [data] : data
            console.log(data);
            
            setTodos(data);
        };
        requestUser();
    }, [id])
    return (<>
        {/* <p>For {username} </p> */}
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => {
                        return <Todo {...todo}/>
                    })}
                </tbody>
            </table>
        </div>
    </>)
}