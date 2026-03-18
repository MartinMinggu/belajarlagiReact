export default function BaseLogo(){
    console.log('Generate BaseLogo');
    const arcadeName = 'Nox Stellar';
    return (
        <div className="logo-container">
            <i className="fab fa-react"></i>
            <span>{arcadeName}</span>
        </div>
    )
}