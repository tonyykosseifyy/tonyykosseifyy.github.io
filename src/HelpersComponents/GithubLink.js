import React from 'react'
import "./helpers.styles.css";
//import ObserveAnimationItem from 'react-scroll-fade-animation/observe';


const GithubLink = ({ end }) => {
  return (
    <div className={`github ${end ? "" : "github_notvisible"}`}>
      Follow on Github
      <a target="_blank" className='link' href='https://github.com/tonyykosseifyy' alt="github" />
    </div>
  );
};

export default GithubLink;

