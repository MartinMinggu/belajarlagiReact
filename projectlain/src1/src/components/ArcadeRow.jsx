export default function ArcadeRow(arcade){
    console.log('Generate ArcadeRow');
    return (
        <tr>
            <td>{arcade.name}</td>
            <td>{arcade.year}</td>
            <td>{arcade.developer}</td>
            <td>{arcade.coins}</td>
        </tr>
    );
}