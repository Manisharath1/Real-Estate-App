import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import LoginPage from './Pages/LoginPage';
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';


export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signOut" element={<SignUp />} />

     </Routes>
    </BrowserRouter>
  )
}
