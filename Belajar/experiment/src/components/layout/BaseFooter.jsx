import {styled} from 'styled-components';
const FooterText = styled.div`
text-align: center;
    margin-top: 40px;
    text-shadow:
        0 0 7px #96E4FF,
        0 0 10px #72E7FF,
        0 0 21px #72E7FF,
        0 0 42px #0AD7FF,
        0 0 82px #0AD7FF,
        0 0 92px #0AD7FF,
        0 0 102px #0AD7FF,
        0 0 151px #0AD7FF;
`;
export default function BaseFooter() {
    const footer = {
        year: 2026,
        author: 'anonymous',
        class: 'footer'
    }
    

    // return <div className={footer.class}>Develop on year {footer.year}, by {footer.author}</div>
    return <FooterText>Develop on year {footer.year}, by {footer.author}</FooterText>
}