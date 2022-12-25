import React from 'react'
import "./helpers.styles.css";
//import ObserveAnimationItem from 'react-scroll-fade-animation/observe';


const GithubLink = ({ end }) => {
  return (
    <div className={`github ${end ? "" : "github_notvisible"}`}>Follow on Github</div>
  );
};

export default GithubLink;

