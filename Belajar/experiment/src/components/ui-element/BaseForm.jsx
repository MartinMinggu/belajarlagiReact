import styled from "styled-components";
const BaseFormStyled = styled.form`    
    &{
        border-left:solid 2px #FC9CFF;
        padding-left: 25px;
        margin-left: 25px;
    }
    & td{
        padding: 8px;
    }
    & td:first-child{
        min-width: 80px;
    }
    & input{
        background-color: transparent;
        border:solid #19D9FF 1px;
        color:white;
        outline: none;
        height: 32px;
        width: 200px;
        box-sizing: border-box;
        padding: 0 10px;
        border-radius: 6px;
    }
`;
export default function BaseForm({ children, ...props }) {
    return <BaseFormStyled {...props}>
        {children}
    </BaseFormStyled>
}