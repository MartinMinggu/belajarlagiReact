import { styled } from 'styled-components';
import PageHeader from './PageHeader';
import { Outlet, useMatches } from 'react-router-dom';
import NavigationButtons from './NavigationButtons';

const AppContent = styled.div`
  font-family: sans-serif;
  color:#57606f;
`;
const GlobalContainer = styled.main`
  width:50%;
  min-width:550px;
  margin: 0 auto;
`;

export default function Layout() {
    // const { genre } = useParams();
    // const getTitle = () => (genre === null) ? 'Genre List' : `${genre} Movies`;
    const matches = useMatches();
    const title = matches.find(match => match.loaderData?.title)?.loaderData?.title;    // let tittle = matches.find(match => match.handle?.title).handle.title
    // const paramTitle = matches.find(match => match).params.genre;
    // if(paramTitle){
    //     tittle = paramTitle + " " + tittle;
    // }

    return (<>
        <AppContent>
            <NavigationButtons />
            <PageHeader>{title}</PageHeader>
            <GlobalContainer>
                <Outlet></Outlet>
            </GlobalContainer>
        </AppContent>
    </>);
}