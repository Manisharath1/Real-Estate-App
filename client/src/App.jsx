import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';
import Navbar from './components/Navbar';
import Contact from './Pages/Contact';
import PrivateRoute from './components/PrivateRoute';


export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<PrivateRoute />} >
      <Route path="/profile" element={<Profile />} />
      </Route>
     </Routes>
    </BrowserRouter>
  )
}
