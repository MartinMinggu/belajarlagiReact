import { useState, useMemo } from "react";

const hitungCashBack = ({ total, min, percent, max }) => {
    console.log('hitung cashback di proses');
    
    total = parseFloat(total);
    min = parseFloat(min);
    max = parseFloat(max);
    percent = parseFloat(percent) / 100.0;
    if (total > min) return percent * total;
    if (total >= max) return max;
    return 0;
}
export default function CashbackCalculator() {
    const [nama, setNama] = useState('');
    const [total, setTotal] = useState(0);
    const [min, setMin] = useState(0);
    const [percent, setPercent] = useState(0);
    const [max, setMax] = useState(0);
    const cashback = useMemo(()=>{
        hitungCashBack({total, min, percent, max});
    }, [total, min, percent, max])
    /** // cara kedua   
     const [cashback, setCashback]  useState();
     useEffect (() =>{
            setCashback(hitungCashBack({total, min, percent, max}));
        }, [total, min, percent, max])
     */
    return (<>
        <div className="container">
            <div>Nama Customer: <input type="text" onChange={event => setNama(event.target.value)} value={nama} /></div>
            <div>Total Belanja: <input type="number" onChange={event => setTotal(event.target.value)} value={total} /></div>
            <div>Minimum Belanja: <input type="number" onChange={event => setMin(event.target.value)} value={min} /></div>
            <div>Presentase Callback: <input type="number" onChange={event => setPercent(event.target.value)} value={percent} />%</div>
            <div>Maximun Cashback: <input type="number" onChange={event => setMax(event.target.value)} value={max} />%</div>
            <div className="result">Cashback yang diterima : {cashback}</div>
        </div>
    </>)
}