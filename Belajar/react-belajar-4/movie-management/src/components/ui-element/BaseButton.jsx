import {styled} from 'styled-components';

const SolidButton = styled.button`
    background-color:#686de0;
    color:white;
    height: 36px;
    border-radius:4px;
    border:none;
    padding: 0 13px;
    cursor:pointer;
    font-size:14px;
    text-transform:capitalize;
`;

export default function BaseButton({children, type, onClick}){
    return (
        <SolidButton type={type} onClick={onClick}>{children}</SolidButton>
    );
}