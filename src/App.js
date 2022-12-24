import React,{ useState } from 'react'
import "./App.css";
import ViewPager from './components/ViewPager';
import Navbar from "./components/Navbar";
import GithubLink from './HelpersComponents/GithubLink';

const App = () => {
  const [ currentFace , setCurrentFace ] = useState(0);
  const [ end, setEnd ] = useState(true) ;
    return (
      <section className='app'>
        <ViewPager currentFace={currentFace} setCurrentFace={setCurrentFace} setEnd={setEnd} />
        <Navbar indexSelected={currentFace} handleButtonClick={setCurrentFace} />
        <GithubLink end={end} />
      </section>
    );
};

export default App ;