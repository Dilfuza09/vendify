import Router from 'router-dom'
import './App.css'
import Home from './pages/Home'
import Katalog from './pages/Katalog'
import Aksiyalar from './pages/Aksiyalar'
import Karta from './pages/Karta'
import Yangiliklar from './pages/Yangiliklar'
import Magazin from './pages/Magazin'
import Aloqa from './pages/Aloqa'
import Ish from './pages/Ish'

function App() {
  return (
    <>
    <Router>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/contact" element={<Katalog/>} />
      <Route path="/about" element={<Aksiyalar/>} />
      <Route path="/about" element={<Karta/>} />
      <Route path="/about" element={<Yangiliklar/>} />
      <Route path="/about" element={<Magazin/>} />
      <Route path="/about" element={<Aloqa/>} />
      <Route path="/about" element={<Ish/>} />
    </Router>
    </>
  )
}

export default App
