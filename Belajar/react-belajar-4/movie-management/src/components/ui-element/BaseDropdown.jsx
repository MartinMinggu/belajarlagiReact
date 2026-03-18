import {forwardRef} from "react";
import {styled} from 'styled-components';

const Selectbox = styled.select`
    border:solid #8395a7 1px;
    height: 36px;
    width:250px;
    border-radius:4px;
    outline:none;
    box-sizing:border-box;
    padding:8px;
`;

function iterateOptions(options){
    let elements = [];
    for(let {value, text} of options){
        elements.push(<option key={value} value={value}>{text}</option>)
    }
    return elements;
}

const BaseDropdown = forwardRef(
    function({options}, ref){
        return (
            <Selectbox ref={ref}>
                {iterateOptions(options)}
            </Selectbox>
        );
    }
)

export default BaseDropdown;