import {forwardRef} from "react";
import {styled} from 'styled-components';

const RadioLabel = styled.label`
    color: #16a085;
    margin-left:4px;
    margin-right:10px;
`;

const BaseRadioButton = forwardRef(
    function(props, ref){
        const { label, ...inputProps } = props;
        return (
            <>
                <input ref={ref} type="radio" {...inputProps}/>
                <RadioLabel>{label}</RadioLabel>
            </>
        );
    }
);

export default BaseRadioButton;