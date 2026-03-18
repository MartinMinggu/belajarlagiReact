import { styled } from 'styled-components';
import PageHeader from './PageHeader';

const AppContent = styled.div`
  font-family: sans-serif;
  color:#57606f;
`;
const GlobalContainer = styled.main`
  width:50%;
  min-width:550px;
  margin: 0 auto;
`;

export default function Layout({ children, title }) {
    return (<>
        <AppContent>
            <PageHeader>{title}</PageHeader>
            <GlobalContainer>
                {children}
            </GlobalContainer>
        </AppContent>
    </>);
}