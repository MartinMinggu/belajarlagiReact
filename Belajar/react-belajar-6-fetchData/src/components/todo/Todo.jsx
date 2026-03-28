export default function Todo({id, title, completed}){
    return <tr>
        <td hidden>{id}</td>
        <td>{title}</td>
        <td> <input type="checkbox" readOnly  checked={completed}></input></td>
    </tr>
}