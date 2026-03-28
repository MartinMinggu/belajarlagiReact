import { useEffect, useState } from "react";
import UserRow from "./UserRow";
import axios from 'axios'
import TodoPage from "../todo/TodoPage";

// BaseUrl = 'https://jsonplaceholder.typicode.com'
export default function UserPage() {
    const [id, setId] = useState(0);
    const [selectedId, setSelectedId] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const requestUser = async () => {
            let url = id != 0 ? "/" + id : "";
            let { data } = await axios.get('/users' + url);
            data = !data.length ? [data] : data
            // let data = await response.json();
            // const response = await fetch('https://jsonplaceholder.typicode.com/users' + url);
            // let data = await response.json();
            // data = !data.length ? [data] : data
            setUsers(data)
            console.log(data);
        };
        requestUser();
    }, [id])

    const iterateData = (users) => {
        console.log("users ", users);

        let element = [];
        for (let user of users) {
            element.push(<UserRow key={user.id} {...user} handleSelectTodo={() => setSelectedId(user.id)} />)
        }
        return (<>{element}</>)
    }
    return (<>
        <div>
            <div className="filter">
                <span>Selected User</span>
                <select id="selected-user" onChange={event => setId(event.target.value)}
                    value={id}>
                    <option value="0">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <td>Action</td>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Username</td>
                            <td>Company</td>
                        </tr>
                    </thead>
                    <tbody>
                        {iterateData(users)}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="todo">
            <h1>Todo List</h1>
            <TodoPage id={selectedId}  />

        </div>
    </>
    )
};