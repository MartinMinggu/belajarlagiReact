import CapsuleButton from '../ui-element/CapsuleButton.jsx';
import CoinIcons from '../ui-element/CoinIcons.jsx';

// Deklarasi fungsi
// function convertCoins(coins) {
//     let icons = []
//     for (let index = 1; index <= coins; index++) {
//         icons.push(<i key={index} className="fas fa-donate"></i>);
//     }
//     return icons;
// }
export default function ArcadeRow({ id, name, year, developer, coins, handleClick }) {
    // export default function ArcadeRow(arcade){
    console.log('Generate ArcadeRow');
    // console.log(arcade);
    // expresion fungsi
   
    return (
        <tr>
            <td>
                <CapsuleButton type="button" onClick={() => handleClick(id)}>
                    <i className='fas fa-trash'></i> <span>Delete</span>
                </CapsuleButton>
              </td>
            <td>{name}</td>
            <td>{year}</td>
            <td>{developer}</td>
            <td><CoinIcons coins={coins} /></td>
            {/* <td>{convertCoins(coins)}</td> */}
            {/* <td>{arcade.name}</td>
            <td>{arcade.year}</td>
            <td>{arcade.developer}</td>
            <td>{arcade.coins}</td> */}
        </tr>
    );
}