import BaseTable from "../ui-element/BaseTable.jsx";
import ArcadeRow from "./ArcadeRow.jsx";
// import arcades from "../../data/arcades.js";

function loopArcade(arcades, handleDelete) {
    const elements = [];
    console.log(arcades);
    
    for (let arcade of arcades) {
        elements.push(
            <ArcadeRow key={arcade.id} handleClick={handleDelete}
                {...arcade}
            >
            </ArcadeRow >
        );
    }
    return (
        <tbody>
            {elements}
        </tbody>
    );
}

export default function ArcadeTable({arcades, handleDelete}) {
    console.log('Generate ArcadeTable');
    return (
        <BaseTable>
            <thead>
                <tr>
                    <th>Actions</th>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Developer</th>
                    <th>Coins</th>
                </tr>
            </thead>
            {loopArcade(arcades, handleDelete)}
            {/* <tbody>
                {arcades.map((arcade, index) => {
                    // return <ArcadeRow key={index} {...arcade} />
                    // return <ArcadeRow key={index} name={arcade.name} coins={arcade.coins} year={arcade.year} developer={arcade.developer} />
                })} 
            </tbody>*/}

        </BaseTable>
    )
}