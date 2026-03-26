import React from "react"
const ButtonAlert = React.memo((({ onClick }) => {
    console.log('Alert dibuat');
    
    return <button type="button" onClick={onClick}>Alert Info</button>
}));

export default ButtonAlert;