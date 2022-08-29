import './App.css';
import Home from './components/Home/Home';
import {Link, Routes, BrowserRouter, Route} from 'react-router-dom'
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

export default function Portfolio() {
  return (
    <BrowserRouter>
    <div id='links'>
    <Link to="/">Home</Link>
    <Link to="contact">Contact</Link>
    <Link to="apps">Apps</Link>
    </div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="contact" element={<Contact />} />
    <Route path="apps" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  );
}
export function App() {
  return (
    <div className="App">
          <Home />
      </div>
  );
}


