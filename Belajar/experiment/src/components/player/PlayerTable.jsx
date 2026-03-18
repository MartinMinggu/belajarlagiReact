import PlayerRow from "./PlayerRow";

const loopPlayer = (players, handleDelete) => {
    const element = [];
    for (let player of players) {
        element.push(
            <PlayerRow key={player.id} {...player} handleDelete={handleDelete} />
        )
    }
    return <tbody>{element}</tbody>
}
export default function PlayerTable({ players, handleDelete }) {
    return <table className="general-table">
        <thead>
            <tr>
                <th>Actions</th>
                <th>username</th>
                <th>balance</th>
                <th>score</th>
                <th>Level</th>
            </tr>
        </thead>
        {loopPlayer(players, handleDelete)}
    </table>;
}