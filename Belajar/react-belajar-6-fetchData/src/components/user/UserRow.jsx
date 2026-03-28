import ButtonAction from "../ui-component/ButtonAction"
// BaseUrl = 'https://jsonplaceholder.typicode.com'
export default function UserRow({id, name, email,username, company, handleSelectTodo}) {
    return (<>
        <tr>
            <td className="table-actions">
                <ButtonAction>Contact </ButtonAction>
                <ButtonAction>Post </ButtonAction>
                <ButtonAction onClick = {handleSelectTodo}>Todo </ButtonAction>
            </td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{username}</td>
            <td>{company.name}</td>
            {/* <td>{company.name}</td> */}
            {/* <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Username</td>
            <td>Company</td> */}
        </tr>
    </>
    )
};