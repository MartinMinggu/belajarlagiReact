import {styled} from 'styled-components';

const Message = styled.div`
    display:inline;
    color:#e84118;
    font-weight:bold;
    margin: 10px;
`;

export default function Validation({children}){
    return <>
        <Message>
            {children}
        </Message>
    </>
}