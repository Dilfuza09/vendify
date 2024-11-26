import Router from 'router-dom'
import './App.css'
import Home from './pages/Home'
import Home from './pages/Katalog'
import Home from './pages/Aksiyalar'
import Home from './pages/Karta'
import Home from './pages/Yangiliklar'
import Home from './pages/Magazin'
import Home from './pages/Aloqa'
import Home from './pages/Ish'

function App() {
  return (
    <>
    <Router>
      <Route path="/" component={<Home} />
      <Route path="/about" component={Aksiyalar} />
      <Route path="/contact" component={Contact} />
    </Router>
    </>
  )
}

export default App
