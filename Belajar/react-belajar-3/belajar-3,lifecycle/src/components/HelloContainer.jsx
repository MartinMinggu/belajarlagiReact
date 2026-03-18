import { useEffect } from "react";

export default function HelloContainer(){
    useEffect(()=> {
        console.log('Hello Container mounting');
        return () => {
            console.log('Hello Container dismount');
        }
    }, [])
    return <div>
        Hello World
    </div>;
}