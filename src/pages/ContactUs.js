import React, { useRef , useState } from 'react'
import "../PageStyles/Contact.css";
import Typer from '../components/Typer';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[400],
    },
    mode: "dark"
  },
});


function ContactUs() {
  const [ name , setName ] = useState("") ;
  const [ email , setEmail ] = useState("");
  const [ emailError , setEmailError ] = useState(false);
  const [ message ,setMessage] = useState("") ;
 
  const changeEmail = ( str ) => {
    setEmail(str) ;
    let result = str.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (result) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
  }
  const handleSubmit = () => {
    let data = {
      user_name: name ,
      user_email: email ,
      message: message 
    }
    sendEmail(data)
  }
  const sendEmail = (data) => {
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      data , 
      process.env.REACT_APP_PUBLIC_KEY
    ).then((result) => console.log(result.text) , (error) => {
          console.log(error.text);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <div className='contact contact_container'>
        <div className='contact_headings'>
          <h1>Let's talk</h1>
          <h4>
            <Typer typeSpeed={5} strings={["If you wanna get in touch, talk to me about a project collaboration, give it an Email!"]} />
          </h4>
        </div>

        <div className='contact_form contact_headings'>
          <FormControl onSubmit={() => handleSubmit()}>
            <TextField onChange={(e) => setName(e.target.value)} value={name} required color='primary' id="outlined-basic" label="Name" variant="outlined" />
            <TextField error={emailError} onChange={(e) => changeEmail(e.target.value)} value={email} required type="email" id="filled-basic" label="Email Address" variant="outlined" />
            <TextField onChange={(e) => setMessage(e.target.value)} value={message} required multiline id="standard-basic" label="Message" variant="outlined" />
            <Button disabled={!name || !message || !email || emailError} type="submit" onClick={() => handleSubmit()} variant="outlined" endIcon={<SendIcon />}>Submit</Button>
          </FormControl>
    
        </div>
        
      </div>      
    </ThemeProvider>

  )
}

export default ContactUs;