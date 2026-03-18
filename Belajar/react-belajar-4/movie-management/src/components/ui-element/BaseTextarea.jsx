import {forwardRef} from "react";
import {styled} from 'styled-components';

const FixedTextarea = styled.textarea`
    border:solid #8395a7 1px;
    height: 120px;
    width:350px;
    border-radius:4px;
    outline:none;
    box-sizing:border-box;
    padding:8px;
    resize:none;
`;

const BaseTextarea = forwardRef(
    function({...props}, ref){
        return (
            <FixedTextarea ref={ref} {...props}></FixedTextarea>
        );
    }
);

export default BaseTextarea;