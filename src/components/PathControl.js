
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Resources from './Resources';
import Donate from './Donate';
import Home from './Home';
import Events from './Events';


const PathControl = () => {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />
      </Routes>
  ); 
};

export default PathControl;
