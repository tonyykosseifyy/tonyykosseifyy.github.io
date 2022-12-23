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
        {/*<ViewPager currentFace={currentFace}>
          
        </ViewPager>
        */}
        <Navbar handleButtonClick={(newFace) => handleButtonClick(newFace)}/>
      </section>
    );
};

export default App ;