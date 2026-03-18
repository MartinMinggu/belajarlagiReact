// export default function PersonSection({personRef}) {
//     return <div className='container' id='user' ref={personRef}>Faizal Yamal</div>;

import { forwardRef } from "react";

// }
// const PersonSection = forwardRef((props, ref) => {
const PersonSection = forwardRef(({label, year}, ref) => {
    return <>
    <div>{label} - {year}</div>
    {/* <div>{props.label} - {props.label}</div> */}
        <div className='container' id='user' ref={ref}>Faizal Yamal</div>
    </>

});
export default PersonSection;