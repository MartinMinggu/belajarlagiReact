import {forwardRef} from "react";
import {styled} from 'styled-components';

const Textbox = styled.input`
    border:solid #8395a7 1px;
    height: 36px;
    width:250px;
    border-radius:4px;
    outline:none;
    box-sizing:border-box;
    padding:8px;
`;

const BaseTextbox = forwardRef(
    function({...props}, ref){
        return (
            <Textbox ref={ref} {...props}/>
        );
    }
);

export default BaseTextbox;