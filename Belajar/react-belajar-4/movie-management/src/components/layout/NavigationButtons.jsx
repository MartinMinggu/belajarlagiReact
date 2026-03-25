import {styled} from 'styled-components';
import {NavLink} from 'react-router-dom';

const NavigationWrapper = styled.nav`
    text-align:center;
    margin:20px 0;

    & > a{
        display:inline-block;
        text-decoration:none;
        margin: 0 2px;
        background-color:#686de0;
        color:white;
        height: 36px;
        line-height:36px;
        border-radius:4px;
        border:none;
        padding: 0 13px;
        cursor:pointer;
        font-size:14px;
        text-transform:capitalize;
    }

    & > a[aria-current="page"]{
        background-color:#30336b;
    }
`;

export default function NavigationButtons(){
    return (
        <NavigationWrapper>
            <NavLink to="/">Movies</NavLink>
            <NavLink to="/cinemas">Cinema</NavLink>
        </NavigationWrapper>
    );
}