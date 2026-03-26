import React from 'react'
const CounterDisplay = React.memo(({count}) => {
    console.log('counter display dibuat');
    return <div>Hasil Count dari child :{count} </div>
});

// akan diubpdate jika ada kaitan dengan componen ini berdasarkan count
export default CounterDisplay;