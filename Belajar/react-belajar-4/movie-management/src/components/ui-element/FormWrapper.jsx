import {styled} from 'styled-components';

const FormContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;

    & input{
        margin-right:5px;
    }
`;

export default function FormWrapper({children}){
    return (
        <>
            <FormContainer>
                {children}
            </FormContainer>
        </>
    );
}