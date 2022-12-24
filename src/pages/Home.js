import React from 'react'
import "../PageStyles/Home.css";
import Typer from "../components/Typer";


const Home = () => {
  
  return (
    <div className='home'>
      <div className='presentation'>
        <h1>
          <Typer onComplete={(e) =>console.log(e) } strings={["Hello, my name is "]} />
          <span className='name'>Tony Kosseify</span>
        </h1>

        <h2> 
          <Typer startDelay={2000} typeSpeed={15} strings={["Specialized in Full Stack Web Development and Mobile App Development."]} />
        </h2>
      </div>
      

    </div>
  );
};

export default Home;