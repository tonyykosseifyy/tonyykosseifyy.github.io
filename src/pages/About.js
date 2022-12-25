import React from 'react'
import "../PageStyles/About.css";
import Fade from 'react-reveal/Fade';


function About() {
  return (
    <div className='about'>
      <div className='about_me'>
        <Fade>

        
          <div className='about_me_headings'>
            <h1 className='heading'>Who Am I?</h1>
            <h2>A few word about me.</h2>
            <div>
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
          
          <div className='about_me_headings'>
            <div className='about_me_services_headings'>
              <h1>What I can do?</h1>
              <h2>My services</h2>
            </div>

            <div className='about_me_services_containers'>
              <div>
                <h3>Frontend Apps</h3>
                <p>
                  Ensuring that website visitors can easily interact with the page by combining
                  design, technology and programming as well as taking care of debugging. 
                  Use modern tech such as React Js , Sass and redux.
                </p>
              </div>

              <div>
                <h3>Backend Apps</h3>
                <p></p>
              </div>

              <div>
                <h3>Native Apps</h3>
                <p></p>
              </div>
           
            </div>

          </div>

        </Fade>

      </div>
      
      
    </div>
  );
};



export default About;