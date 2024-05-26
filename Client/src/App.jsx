

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { NavigationBar } from './Components/NavigationBar';
import { Sign } from './Components/Sign';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signin" element={<Sign />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
