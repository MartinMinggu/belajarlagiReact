export default function CustomInputForm({ text, id, error, ...props }) {
    console.log("error ", error);

    return <div className="mb-5">
        <div>
            <label htmlFor={id}>{text}</label>
            <input id={id} type="text" placeholder={`masukan ${text}`} {...props} />
        </div>
        <span className='validation'>{error?.message}</span>
    </div>;
}
