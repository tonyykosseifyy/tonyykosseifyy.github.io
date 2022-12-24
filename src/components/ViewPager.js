import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "./ViewPager.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import ContactUs from "../pages/ContactUs";


const ViewPager = ({ currentFace , setCurrentFace }) => {
  return (
    <AwesomeSlider
      animation="cubeAnimation"
      cssModule={[CoreStyles, AnimationStyles]}
      bullets={true}
      fillParent
      selected={currentFace || 0 }
      onTransitionEnd={(ref) => setCurrentFace(ref.currentIndex)}
    >
      <Home />
      <About />
      <Work />
      <ContactUs />
    </AwesomeSlider>
  );
};

export default ViewPager ;