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

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/aksiyalar" element={<Aksiyalar />} />
        <Route path="/karta" element={<Karta />} />
        <Route path="/yangiliklar" element={<Yangiliklar />} />
        <Route path="/magazin" element={<Magazin />} />
        <Route path="/aloqa" element={<Aloqa />} />
        <Route path="/ish" element={<Ish />} />
        
      </Routes>
  );
}

export default App;
