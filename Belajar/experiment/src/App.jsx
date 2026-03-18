import BaseLogo from './components/layout/BaseLogo'
import AcradePage from './components/acrade/AcradePage';
import BaseFooter from './components/layout/BaseFooter';
import NavigationTab from './components/layout/NavigationTab';
import PlayerPage from './components/player/PlayerPage';
import { useState } from 'react';
import GlobalWrapper from './components/ui-element/GlobalWrapper';

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
