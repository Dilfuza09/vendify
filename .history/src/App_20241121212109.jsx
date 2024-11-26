import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Katalog from './pages/Katalog';
import Aksiyalar from './pages/Aksiyalar';
import Karta from './pages/Karta';
import Yangiliklar from './pages/Yangiliklar';
import Magazin from './pages/Magazin';
import Aloqa from './pages/Aloqa';
import Ish from './pages/Ish';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
