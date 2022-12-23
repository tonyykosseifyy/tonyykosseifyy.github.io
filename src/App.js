import React,{ useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import ViewPager from './components/ViewPager';



const App = () => {
    const [currentFace, setCurrentFace] = useState("front");
    const handleButtonClick = (newFace) => {
      setCurrentFace(newFace);
    }
    return (
      <section>
        <ViewPager currentFace={currentFace}>
          {/*<Navbar handleButtonClick={(newFace) => handleButtonClick(newFace)}/>*/}
        </ViewPager>
      </section>
    );
};

export default App ;