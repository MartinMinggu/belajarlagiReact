import styled from "styled-components";

const PlayerLevelStyle = styled.div`
    .& span{
        text-transform: capitalize;
    } 
    & > .fa-trophy{
        margin-right: 6px;
    }
    &.legendary{
        color: #FFE02F;
    }
    &.epic{
        color: #7158e2;
    }
    &.rare{
        color: #19D9FF
    }
    &.common{
        color:#bdc3c7;
    }

   ` ;
export default function PlayerLevel({ scores, Children }) {
    let level = 'common';
    if (scores >= 90_000) {
        level = 'legendary'
    } else if (scores >= 70_000) {
        level = 'epic'
    } else if (scores > 40_000) {
        level = 'rare'
    }

    return (<PlayerLevelStyle className={level}>
        {Children}
        <span>{level}</span>
    </PlayerLevelStyle>);
} 