import styled from "styled-components";
const InputContainerStyle = styled.div`
    margin-bottom: 10px;
    
    & .validation{
        color: red;
        margin: 10px;
        font-size:small;
        background-color:rgba(185, 106, 106, 0.1);
        opacity: 0.7;
    }
`;
export default function CustomInputForm({ text, id, error, ...props }) {


    return <InputContainerStyle>
        <div>
            <label htmlFor={id}>{text}</label>
            <input id={id} type="text" placeholder={`masukan ${text}`} {...props} />
        </div>
        <span className='validation'>{error?.message}</span>
    </InputContainerStyle>;
}
