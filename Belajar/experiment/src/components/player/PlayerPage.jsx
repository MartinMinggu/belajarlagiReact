import { useState } from "react";
import playersData from "../../data/players.js"
import PlayerTable from "./PlayerTable.jsx"
import PlayerForm from "./PlayerForm.jsx";
export default function PlayerPage() {
    const [players, setPlayers] = useState(playersData);
    const [nextId, setNextId] = useState(6);

    const handleDelete = id => {
        const selectedIndex = players.findIndex(player => player.id === id);
        let updatedPlayers = [...players];
        updatedPlayers.splice(selectedIndex, 1);
        setPlayers(updatedPlayers);
    }
    const submitPlayer = newPlayer => {
        newPlayer.id = nextId;
        setNextId(prevId => prevId + 1);
        setPlayers(prevPlayer => [...prevPlayer, newPlayer]);
    }
    return (
        <>
            <PlayerTable players={players} handleDelete={handleDelete} />
            <PlayerForm submitPlayer={submitPlayer} />
        </>
    );
}