import Router from 'router-dom'
import './App.css'
import Home from './pages/Home'
import Home from './pages/Katalog'
import Home from './pages/Aksiyalar'

function App() {
  return (
    <>
    <Router>
      <Route path="/" component={<Home/>} />
      <Route path="/contact" component={<Katalog/>} />
      <Route path="/about" component={<Aksiyalar/>} />
      <Route path="/about" component={<Ka/>} />
    </Router>
    </>
  )
}

export default App
