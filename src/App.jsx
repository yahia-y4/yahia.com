

import './App.css'
import TopBar from './component/topBar/topBar.jsx'
import MainPage from './pages/mainPage/mainPage.jsx'

function App() {


  return (
   <>
   <TopBar/>
    <div className='overlay'>
    <MainPage/>
    </div>
    </>
    
  
  )
}

export default App
