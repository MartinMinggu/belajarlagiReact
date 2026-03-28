export default function Todo({id, title, completed}){
    return <div>
        <p hidden>{id}</p>
        <p>{title}</p>
        <p>{completed ? "completed" : "Not"}</p>
    </div>
}