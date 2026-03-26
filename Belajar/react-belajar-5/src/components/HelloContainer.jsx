import React from 'react'
const HelloContainer = React.memo(() => {
    console.log('hello container dibuat');
    return <div>Hello Container</div>
});
export default HelloContainer;
// const Component =React.memo(() => {})
// Memorization
// Cache : data, photo disimpan saja