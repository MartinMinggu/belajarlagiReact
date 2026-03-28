import axios from "axios";
import { useEffect, useState } from "react";
import Todo from "./Todo";
export default function TodoPage({ id, username }) {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const requestUser = async () => {
            let { data } = await axios.get(`/users/${id}/todos`);
            setTodos(data);
        };
        requestUser();
    }, [id])
    console.log("id", id);

    return (<>
        <div className="table-container">
            {id !== 0 ?
                <>
                    <p>For {username} </p>
                    <table>
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map(todo => {
                                return <Todo key={todo.id} {...todo} />
                            })}
                        </tbody>
                    </table>
                </>
                :
                <p>silakan pilih salah satu </p>
            }
        </div>

    </>)
}