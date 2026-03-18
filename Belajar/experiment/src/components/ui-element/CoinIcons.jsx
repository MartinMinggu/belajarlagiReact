import styled from "styled-components";

const IconCoin = styled.i`
    margin: 0 4px;
    color:#FFE02F;
    
    &:first-child{
        margin-left: 0;
    }
`;
export default function CoinIcons({ coins }) {

    let icons = []
    for (let index = 1; index <= coins; index++) {
        icons.push(<IconCoin className="fas fa-donate"></IconCoin>);

        // icons.push(<i key={index} className="fas fa-donate"></i>);
    }
    return <>{icons}</>;
}