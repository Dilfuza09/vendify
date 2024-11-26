import Router from 'router-dom'
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
    </>
  )
}

export default App
