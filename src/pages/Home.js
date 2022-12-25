import React from 'react'
import "../PageStyles/Home.css";
import Typer from "../components/Typer";


const Home = () => {
  
  return (
    <div className='home'>
      <div className='presentation'>
        <h1>
          <Typer strings={["Hello, my name is "]} />
          <span className='name'>Tony Kosseify</span>
        </h1>

        <h2> 
          <Typer startDelay={2000} typeSpeed={15} strings={["Specialized in Full Stack Web Development and Mobile App Development."]} />
        </h2>
      </div>
      
      <div className='social_media_links'>
        <div className='github-holder'>
          <img src={require("../components/assets/github.png")} alt="github" />
        </div>
        <div className='linkedin-holder'>
          <img src={require("../components/assets/linkedin.png")} alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Home;