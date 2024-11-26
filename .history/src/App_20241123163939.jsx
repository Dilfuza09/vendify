import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Sale from './pages/Sale';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
