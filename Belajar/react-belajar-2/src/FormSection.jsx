import { forwardRef, useImperativeHandle, useRef } from "react";

const FormSection = forwardRef(({getValue}, ref) => {
    const privateFormRef = useRef();
    const judulRef = useRef();
    const bioskopRef = useRef();
    // useImperativeHandler : enkapsulasi: DOM didalam ref tidak bisa diakses dari luar, hanya fungsi tertentu yang boleh
    useImperativeHandle(ref, () => {
        return {
            publicSubmit() {
                privateFormRef.current.requestSubmit();
            }
        }
    });
    const submitHandler = (event) => {
        event.preventDefault();
        const input ={
            judul: judulRef.current.value,
            bioskop: bioskopRef.current.value,
        }
        getValue(input);
    }
    return <>
        <h3>Contoh Form</h3>
        <form ref={privateFormRef} onSubmit={submitHandler}>
            <div>
                <label className="title">Judul : </label>
                <input type="text" ref={judulRef}/>
            </div>
            <div>
                <label>Bioskop : </label>
                <input type="text" ref={bioskopRef} />
            </div>
            <div>
            </div>
        </form>
    </>
});
export default FormSection;