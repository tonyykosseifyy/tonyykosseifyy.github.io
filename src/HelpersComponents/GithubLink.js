import React from 'react'
import "./helpers.styles.css";

const GithubLink = ({ end }) => {
  return (
    <div className={`github ${end ? "" : "github_notvisible"}`}>Follow on Github</div>
  );
};

export default GithubLink;