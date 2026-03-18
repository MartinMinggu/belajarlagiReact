import BaseLogo from './components/layout/BaseLogo'
import AcradePage from './components/acrade/AcradePage';
import BaseFooter from './components/layout/BaseFooter';
import NavigationTab from './components/layout/NavigationTab';
import PlayerPage from './components/player/PlayerPage';
import { useState } from 'react';
import styled from 'styled-components';
const GlobalWrapper = styled.div`
    width: 65%;
    border: solid 2px #FC9CFF;
    border-radius: 8px;
    margin: 0 auto;
    min-width: 900px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
`;
function App() {
  console.log('Generate App');
  const [isPlayerPage, setIsPlayerPage] = useState(false);
  return (
    <>
      <BaseLogo></BaseLogo>
      <NavigationTab isPlayerPage={isPlayerPage} handleSwitch={setIsPlayerPage} />
      <GlobalWrapper>
        {!isPlayerPage ? <AcradePage /> : undefined}
        {isPlayerPage ? <PlayerPage /> : undefined}
      </GlobalWrapper>
      <BaseFooter />
    </>
  )
}

export default App
