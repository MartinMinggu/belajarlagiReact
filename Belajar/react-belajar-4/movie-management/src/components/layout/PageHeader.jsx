import {styled} from 'styled-components';

const CenterTitle = styled.h1`
    display:flex;
    justify-content:center;
    margin-top: 80px;
    margin-bottom:40px;
    font-size:28px;
    text-transform:capitalize;
`;

export default function PageHeader({title}){
    return (
        <CenterTitle>{title}</CenterTitle>
    )
}