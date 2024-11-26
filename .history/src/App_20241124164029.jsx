import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Sale from './pages/Sale';
import Contact from './pages/Contact';
import SingUp from './register/SingUp';
import About from './pages/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<SingUp />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact' element={<To/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
