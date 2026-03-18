import {styled} from 'styled-components';

const BackContainer = styled.div`
    margin-bottom:10px;

    & > button:first-child{
        margin-right:5px;
    }
`;

export default function ButtonContainer({children}){
    return (<>
        <BackContainer>
            {children}
        </BackContainer>
    </>)
}