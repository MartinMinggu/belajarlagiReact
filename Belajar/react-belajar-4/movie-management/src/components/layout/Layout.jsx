import {styled} from 'styled-components';

const AppContent = styled.div`
  font-family: sans-serif;
  color:#57606f;
`;
const GlobalContainer = styled.main`
  width:50%;
  min-width:550px;
  margin: 0 auto;
`;

export default function Layout({children, pageHeader}){
    return (<>
        <AppContent>
            {pageHeader}
            <GlobalContainer>
                {children}
            </GlobalContainer>
        </AppContent>
    </>);
}