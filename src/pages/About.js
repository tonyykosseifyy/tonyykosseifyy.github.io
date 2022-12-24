import React from 'react'
import "../PageStyles/About.css";


function About() {
  return (
    <div className='about'>
      <h1 className='heading'>A little about me</h1>
      <div className='about_me'>
        <p>
          When I first became passionate about coding, I was 15 years old. I came across a python video while browsing YouTube and thought, "Why not let's try it!"
          And here I am passionate about programming and problem solving . 
          After a little research about python I enrolled in a competition held in LAU 
          against some experienced programmers and got third place. And from there the journey 
          had begun . My interests shifted to web development so I started learning Html, css,
          javascript, react, redux . Then developing my backend skills with node, express 
          and mongoDB . I built many successfull full stack websites before getting involved 
          in the Mobile App development field . Currently , I am first year student at the
          Lebanese American University studying computer science and eager to learn more!
        </p>
      </div>
      
    </div>
  );
};

export default About;