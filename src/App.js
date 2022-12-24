import React,{ useState } from 'react'
import "./App.css";
import ViewPager from './components/ViewPager';
import Navbar from "./components/Navbar";


const App = () => {
  const [ currentFace , setCurrentFace ] = useState(0);
    return (
      <section className='app'>
        <ViewPager currentFace={currentFace} setCurrentFace={setCurrentFace} />
        <Navbar indexSelected={currentFace} handleButtonClick={setCurrentFace} />
      </section>
    );
};

export default App ;