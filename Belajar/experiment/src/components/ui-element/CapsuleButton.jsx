import styled from 'styled-components';
const ButtonElement = styled.button`
     font-size: 14px;
    text-transform: uppercase;
    height: 30px;
    padding: 0 15px;
    box-sizing: border-box;
    border-radius: 15px 15px 15px 15px;
    background-color: transparent;
    background-image: linear-gradient(to right, rgba(11, 255, 247, 0.5) , rgba(11, 255, 247, 0.1));
    border: solid 2px #95EDFF;
    color:#95EDFF;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    
    &:hover{
        box-shadow: 0 0 25px #0BFFF7;
        color:white;
        border:solid 2px white;
        text-shadow:
            0 0 7px #9BF3F8,
            0 0 10px #6EF8EF,
            0 0 21px #6EF8EF,
            0 0 42px #0BFFF7,
            0 0 82px #0BFFF7,
            0 0 92px #0BFFF7,
            0 0 102px #0BFFF7,
            0 0 151px #0BFFF7;
    }

    // & > i{
    //     margin-right: 5px;
    // }
`;
export default function CapsuleButton({ children, ...props }) {
    return (<ButtonElement  {...props}>{children}</ButtonElement>);
}