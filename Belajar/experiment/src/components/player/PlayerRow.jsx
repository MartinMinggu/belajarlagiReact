import CapsuleButton from "../ui-element/CapsuleButton";
import PlayerLevel from "./PlayerLevel";

const moneyFormatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
});

const numberFormatter = new Intl.NumberFormat('id-ID');
export default function PlayerRow({ username, balance, scores, handleDelete }) {
    return <tr>
        <td> <CapsuleButton onClick={() => handleDelete(id)}><i className="fas fa-trash"></i><span>Delete</span></CapsuleButton>  </td>
        <td>{username}</td>
        <td>{moneyFormatter.format(balance)}</td>
        <td>{numberFormatter.format(scores)}</td>
        <td><PlayerLevel scores={scores} />
            <i className="fas fa-trophy"></i>
        </td>
    </tr>

}