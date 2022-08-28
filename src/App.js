import './App.css';
import Home from './components/Home/Home';
import {Link, Routes, BrowserRouter, Route} from 'react-router-dom'
import About from './components/About/About';
import Projects from './components/Projects/Projects';

export default function Portfolio() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="about">About Me</Link>
    <Link to="apps">Apps</Link>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
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


