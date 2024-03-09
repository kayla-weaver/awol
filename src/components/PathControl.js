
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Resources from './Resources';
import Home from './Home';
import Events from './Events';
import Donate from './Donate';
import Housing from './Housing';
import Treatment from './Treatment';
import Food from './Food';
import Shelters from './Shelters';
import WarmingShelters from './WarmingShelters';
import Transportation from './Transportation';
import Clothing from "./Clothing";


const PathControl = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/food" element={<Food />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/warming_shelters" element={<WarmingShelters />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/clothing" element={<Clothing />} />
      </Routes>
  ); 
};

export default PathControl;
