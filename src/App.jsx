import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './Components/IndexPage/IndexPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={IndexPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
