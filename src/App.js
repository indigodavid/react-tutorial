import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
