import './App.css';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experiance from './pages/Experiance';
import Navbar  from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay'
import AddExperiance from './pages/admin/AddExperiance';
import AddProject from './pages/admin/AddProject';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/projects' exact element={<Projects/>} />
          <Route path='/project/:id' element={<ProjectDisplay/>} />
          <Route path='/experiance' exact element={<Experiance/>} />
          <Route path='/addexperiance' exact element={<AddExperiance/>} />
          <Route path='/addproject' exact element={<AddProject/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
