import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import AddBooks from './Components/AddBooks';
import Mybooks from './Components/Mybooks';

// frontend deployes link =https://singular-dasik-8dabd4.netlify.app/

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/addbooks" element={<AddBooks />} />
          <Route path="/mybooks" element={<Mybooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
