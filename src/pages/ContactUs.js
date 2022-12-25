import React from 'react'
import "../PageStyles/Contact.css";
import Typer from '../components/Typer';

function ContactUs() {
  return (
    <div className='contact contact_container'>
      <div className='contact_headings'>
        <h1>Let's talk</h1>
        <h4>
          <Typer typeSpeed={15} strings={["If you wanna get in touch, talk to me about a project collaboration, give it an Email!"]} />
        </h4>
      </div>
    </div>
  )
}

export default ContactUs