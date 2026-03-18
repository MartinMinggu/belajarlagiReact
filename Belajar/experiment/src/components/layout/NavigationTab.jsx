import styled from 'styled-components';
const NavContainerStyle = styled.nav`
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    gap: 4px;
`;
const NavButton = styled.button`
    text-transform: uppercase;
    font-size: 16px;
    width: 200px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    box-sizing: border-box;
    padding: 0;
    border:0;
    outline: 0;
    cursor:pointer;
    background-color: transparent;

    &:first-child{
        border-radius: 18px 2px 2px 18px;
        background-image: linear-gradient(to right, rgba(9, 247, 101, 0.5) , rgba(9, 247, 101, 0.1));
        border: solid 2px #A4FFC4;
        color:#A4FFC4;
    }
    &:first-child:hover,
    &.selected:first-child{
        box-shadow: 0 0 25px #09FF68;
        color:white;
        border:solid 2px white;
        text-shadow:
            0 0 7px #B2FFD8,
            0 0 10px #89FFC0,
            0 0 21px #89FFC0,
            0 0 42px #09FF68,
            0 0 82px #09FF68,
            0 0 92px #09FF68,
            0 0 102px #09FF68,
            0 0 151px #09FF68;
    }

    &:last-child{
        border-radius: 2px 18px 18px 2px;
        background-image: linear-gradient(to right, rgba(205, 8, 255, 0.1) , rgba(205, 8, 255, 0.5));
        border: solid 2px #E45DFF;
        color:#E45DFF;
    }
    &:last-child:hover,
    &.selected:last-child{
        box-shadow: 0 0 25px #CC01FF;
        border:solid 2px white;
        color:white;
        text-shadow:
            0 0 7px #E5B5FF,
            0 0 10px #DD88FF,
            0 0 21px #DD88FF,
            0 0 42px #CC01FF,
            0 0 82px #CC01FF,
            0 0 92px #CC01FF,
            0 0 102px #CC01FF,
            0 0 151px #CC01FF;
    }

`

export default function NavigationTab({ handleSwitch, isPlayerPage }) {
    return <NavContainerStyle>
        <NavButton className={!isPlayerPage ? "selected" : undefined} onClick={() => handleSwitch(false)}>arcade</NavButton>
        <NavButton className={isPlayerPage ? "selected" : undefined} onClick={() => handleSwitch(true)}>players</NavButton>
    </NavContainerStyle>;
}