import ArcadeRow from "./ArcadeRow";
import arcades from "../data/arcades.js";

function loopArcade(arcades){
    const elements = [];
    for (let arcade of arcades){
        elements.push(
            <ArcadeRow key={arcade.id} 
                name={arcade.name}
                year={arcade.year}
                developer={arcade.developer}
                coins={arcade.coins}>
            </ArcadeRow>
        );
    }
    return (
        <tbody>
            {elements}
        </tbody>
    );
}

export default function ArcadeTable(){
    console.log('Generate ArcadeTable');
    return (
        <table className="general-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Developer</th>
                    <th>Coins</th>
                </tr>
            </thead>
            {loopArcade(arcades)}
        </table>
    )
}