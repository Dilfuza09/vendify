import Router from 'router-dom'
import './App.css'
import Home from './pages/Home'
import Home from './pages/Karta'
import Home from './pages/Yangiliklar'
import Home from './pages/Magazin'
import Home from './pages/Aloqa'
import Home from './pages/Ish'
import Katalog from './pages/Katalog'
import Aksiyalar from './pages/Aksiyalar'

function App() {
  return (
    <>
    <Router>
      <Route path="/" component={<Home/>} />
      <Route path="/contact" component={<Katalog/>} />
      <Route path="/about" component={<Aksiyalar/>} />
      <Route path="/about" component={<Karta/>} />
      <Route path="/about" component={<Yangiliklar/>} />
      <Route path="/about" component={<Magazin/>} />
      <Route path="/about" component={<Aloqa/>} />
      <Route path="/about" component={<Ish/>} />
    </Router>
    </>
  )
}

export default App
