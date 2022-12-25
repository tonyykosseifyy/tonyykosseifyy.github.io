import React from 'react'
import "../PageStyles/About.css";
import Fade from 'react-reveal/Fade';

const expressLink = "https://camo.githubusercontent.com/219d6a3630f0e1bf015780dec8b485c5bd09a541ae52ce3380c8ad0baf680622/68747470733a2f2f6d706e672e737562706e672e636f6d2f32303139303430312f7a73662f6b697373706e672d6d6f6e676f64622d646f63756d656e742d6f7269656e7465642d64617461626173652d6e6f73716c2d6f70656e73686966742d7765622d6170702d646576656c6f706d656e742d736572766369652d696e2d646568726164756e2d35636131623863623861306633322e333730383237383131353534313032343735353635352e6a7067" ;


function About() {
  return (
    <div className='about'>
      <div className='about_me'>
        <Fade bottom cascade>

        
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
              <Fade bottom >
                <div>
                  <h3>Frontend Apps</h3>
                  <p>
                    Ensuring that website visitors can easily interact with the page. 
                    Use modern tech such as React Js , Sass and redux.
                  </p>
                </div>
              </Fade>
              
              <Fade bottom>
                <div>
                  <h3>Backend Apps</h3>
                  <p>
                  Build scalable and maintainable server applications using modern technology stacks such as Node.js, Express, and MongoDB.
                  </p>
                </div>
              </Fade>
              
            <Fade bottom>
              <div>
                <h3>Native Apps</h3>
                <p>
                Use React Native for building simple native mobile applications. React Native is modern, fast, cross-platform, and popular.
                </p>
              </div>
            </Fade>
              
            </div>

          </div>


        </Fade>

      </div>
      
      
    </div>
  );
};



export default About;