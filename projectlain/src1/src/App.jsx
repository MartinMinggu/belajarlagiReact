import BaseLogo from './components/BaseLogo'
import ArcadeTable from './components/ArcadeTable'

function App() {
  console.log('Generate App');
  const footer = {
    year: 2024,
    author: 'Boby Widjaja',
    class: 'footer'
  }
  return (
    <>
      <BaseLogo></BaseLogo>
      <div className="global-wrapper">
        <ArcadeTable></ArcadeTable>
      </div>
      <div className={footer.class}>Develop on year {footer.year}, by {footer.author}</div>
    </>
  )
}

export default App
