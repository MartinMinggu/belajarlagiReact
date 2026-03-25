import {styled} from 'styled-components';

const SolidButton = styled.button`
    display:inline-block;
    text-decoration:none;
    background-color:#686de0;
    color:white;
    height: 36px;
    line-height:36px;
    border-radius:4px;
    border:none;
    padding: 0 13px;
    cursor:pointer;
    font-size:14px;
    text-transform:capitalize;
    margin-right:5px;
`;

export default function BaseButton({children, onClick, ...props}){
    return (
        <SolidButton {...props} onClick={onClick}>{children}</SolidButton>
    );
}