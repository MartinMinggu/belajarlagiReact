import BaseLogo from './components/layout/BaseLogo'
import AcradePage from './components/acrade/AcradePage';
import BaseFooter from './components/layout/BaseFooter';
import NavigationTab from './components/layout/NavigationTab';
import PlayerPage from './components/player/PlayerPage';
import { useState } from 'react';

function App() {
  console.log('Generate App');
  const [isPlayerPage, setIsPlayerPage] = useState(false);
  return (
    <>
      <BaseLogo></BaseLogo>
      <NavigationTab isPlayerPage={isPlayerPage} handleSwitch={setIsPlayerPage} />
      <div className="global-wrapper">
        {!isPlayerPage ? <AcradePage /> : undefined}
        {isPlayerPage ? <PlayerPage /> : undefined}
      </div>
      <BaseFooter />
    </>
  )
}

export default App
