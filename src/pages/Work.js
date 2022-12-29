import React from 'react';
import "../PageStyles/Work.css";
import Typer from '../components/Typer';

const skills = [
  "html5", "css3","sass","javascript", "React", "Redux","axios", "Material Ui","Node js",
  "MongoDb", "Mongoose", "express", "React Native", "Firebase"
]

function Work() {
  return (
    <div className='work_container'>
      <div className='work_heading'>
        <div>
          <h1>Projects</h1>
          <Typer typeSpeed={5} strings={["Feel free to hover over my projects to discover technologies used and hosted website!"]} />
        </div>
        
        <div className='work_skills'>
          { skills.map(skill => (
            <div key={skill} className='skill'>
              <span>{skill}</span>
            </div>
          ))}
        </div>

        <div className='work_projects'>
          <div className='project'>
            <img src={require("../components/assets/netflix.png")} alt="Netflix" />
            <div>
              <a href="/" target="_blank">check website</a>
              <a href="/" target="_blank">check github</a>
            </div>
          </div>
          
          <div className='project'>
            <img src={require("../components/assets/amazon-clone.png")} alt="Amazon" />
            <div>
              <a href="/" target="_blank">check website</a>
              <a href="/" target="_blank">check github</a>
            </div>
          </div>
          
          <div className='project'>
            <img src={require("../components/assets/tesla-clone.png")} alt="Tesla" />
            <div>
              <a href="/" target="_blank">check website</a>
              <a href="/" target="_blank">check github</a>
            </div>
          </div>

          <div className='project'>
            <img src={require("../components/assets/coffee-shop.png")} alt="Coffee-shop" />
            <div>
              <a href="/" target="_blank">check website</a>
              <a href="/" target="_blank">check github</a>
            </div>
          </div>

          <div className='project'>
            <img src={require("../components/assets/easy-bank.png")} alt="easy-bank" />
            <div>
              <a href="/" target="_blank">check website</a>
              <a href="/" target="_blank">check github</a>
            </div>
          </div>
          
          <div className='project'>
            <img src={require("../components/assets/ip-address.png")} alt="ip-address-project" />
            <div>
              <a href="/" target="_blank">check website</a>
              <a href="/" target="_blank">check github</a>
            </div>
          </div>

          <div className='project'>
            <img src={require("../components/assets/tip-calculator.png")} alt="tip-calculator" />
            <div>
              <a href="/" target="_blank">check website</a>
              <a href="/" target="_blank">check github</a>
            </div>
          </div>

          <div className='project'>
            <div className='mobile' style={{display:"flex"}} >
              <img src="https://raw.githubusercontent.com/selimellieh72/MetaMedApp/main/preview/map.png?token=GHSAT0AAAAAAB4VAEIY2H6JMVZYSHPOVUGGY5N7TTQ" alt="mobile app" />
              <img src="https://raw.githubusercontent.com/selimellieh72/MetaMedApp/main/preview/cam.png?token=GHSAT0AAAAAAB4VAEIYYUNBB4GTHWHZAZKIY5N7V5Q" alt='Mobile' />
              <img src="https://raw.githubusercontent.com/selimellieh72/MetaMedApp/main/preview/credit.png?token=GHSAT0AAAAAAB4VAEIY4NFJEMTRFFBIBY2GY5N7VOA" alt="mobile app" />
              <img src="https://raw.githubusercontent.com/selimellieh72/MetaMedApp/main/preview/transcripts.png?token=GHSAT0AAAAAAB4VAEIYWK4RQ73X55UFY5SGY5N7X6A" alt="mobile app" />
            </div>
            <div>
              <a href="/" target="_blank">check github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work