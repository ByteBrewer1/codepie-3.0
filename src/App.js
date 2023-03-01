import './App.css';
import DenseAppBar from './DenseAppBar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Home from './comp/Home';
import Contact from './comp/Contact';
import About from './comp/About';
import Register from './comp/Register';
import Teams from './comp/Teams';
import Rules from './comp/Rules';
import Gallery from './comp/Gallery';
function App() {
  return (
    <>
    <div className='Container'>
      <DenseAppBar />
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Rules" element={<Rules/>}/>
              <Route path="/Gallery" element={<Gallery/>}/>
              <Route path="/Teams" element={<Teams/>}/>
              <Route path="/Contact" element={<Contact/>}/>
      </Routes>
  </div>
</>
  );
}

export default App;
