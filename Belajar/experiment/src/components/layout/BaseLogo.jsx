import styled from "styled-components";

const LogoContaineer = styled.div`
    display: block;
    width: 200px;
    height: 130px;
    margin:60px auto 60px auto;
    position: relative;
`;
const TitleText = styled.span`
 font-family: 'Playwrite';
    font-size: 30px;
    position:absolute;
    top: 72px;
    left: 12px;
    transform: rotate(348deg);
    animation: flickerText 1.5s infinite alternate;

    @keyframes flickerText {
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow:
            0 0 7px #FBC6FF,
            0 0 10px #FC9CFF,
            0 0 21px #FC9CFF,
            0 0 42px #FF24EB,
            0 0 82px #FF24EB,
            0 0 92px #FF24EB,
            0 0 102px #FF24EB,
            0 0 151px #FF24EB;
        }
        20%, 24%, 55% {        
            text-shadow: none;
        }  
    }
`;
const ReactLogo = styled.i`
font-size: 70px;
    color:white;
    position: absolute;
    top: 0;
    left: 49px;
    transform: rotate(222deg);
    animation: flickerImage 1.5s infinite alternate;

    @keyframes flickerImage {
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
        text-shadow:
        0 0 7px #96E4FF,
        0 0 10px #72E7FF,
        0 0 21px #72E7FF,
        0 0 42px #0AD7FF,
        0 0 82px #0AD7FF,
        0 0 92px #0AD7FF,
        0 0 102px #0AD7FF,
        0 0 151px #0AD7FF;
    }
    20%, 24%, 55% {        
        text-shadow: none;
    }  
}
`;

export default function BaseLogo() {
    console.log('Generate BaseLogo');
    const arcadeName = 'Nil desperandum';
    // const arcadeName = 'Audere est faucere.';
    return (
        <LogoContaineer>
            <ReactLogo className="fab fa-node-js"></ReactLogo>
            <TitleText>{arcadeName}</TitleText>
        </LogoContaineer>
    )
}