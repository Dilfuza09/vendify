import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Sale from './pages/Sale';
import Contact from './pages/Contact';
import About from './pages/About';
import { Toaster } from 'react-hot-toast';
import Register from './register/Register';
import SignIn from './register/SingIn';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
