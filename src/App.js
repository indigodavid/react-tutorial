import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
