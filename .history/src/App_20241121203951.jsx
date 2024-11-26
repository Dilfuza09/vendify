import Router from 'router-dom'
import './App.css'
import Home from './pages/Home'
import Home from './pages/Home'

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
