import { Routes, Route,} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Sale from './pages/Sale';
import Contact from './pages/Contact';
import About from './pages/About';
import { Toaster } from 'react-hot-toast';
import Register from './register/Register';
import Create from './admin/Create';
import All from './admin/All';
import Edit from './admin/Edit';
import Info from './admin/Info';
import SignIn from './register/SingIn';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<SignIn />} />
        <Route path='/create' element={<Create />} />
        <Route path='/all' element={<All />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
