import Router from 'router-dom'
import './App.css'
import Home from './pages/Home'
import Katalog from './pages/Katalog'
import Aksiyalar from './pages/Aksiyalar'
import Karta from './pages/Karta'
import Yangiliklar from './pages/Yangiliklar'
import Magazin from './pages/Magazin'

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
