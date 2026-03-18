import {styled} from 'styled-components';

const Row = styled.div`
    margin-bottom:20px;

    & span{
        margin-right: 25px;
        color:#1e90ff;
        font-weight:bold;
    }

    & .post-fix{
        color:gray;
        margin-left: 5px;
    }
    
    & textarea{
        margin-top:8px;
    }
`;

export default function FormRow({children}){
    return (
        <>
            <Row>
                {children}
            </Row>
        </>
    )
}