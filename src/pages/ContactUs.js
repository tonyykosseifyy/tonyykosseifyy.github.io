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
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Fade from 'react-reveal/Fade';

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
  const [ open , setOpen ] = useState(false);
  const [ error , setError ] = useState(false);
  const handleClose = () => {
    setOpen(false)
  }
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
  const reset = () => {
    setName("")
    setEmail("")
    setMessage("")
  }
  const sendEmail = (data) => {
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      data , 
      process.env.REACT_APP_PUBLIC_KEY
    ).then((result) => {
      setOpen(true)
      setError(false)
      reset()
      
    } , (error) => {
          setError(true)
          setOpen(false)
          reset()
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Fade cascade>

      
      <div className='contact contact_container'>
        <div className='contact_headings'>
          <h1>Let's talk</h1>
          <h4>
            <Typer typeSpeed={5} strings={["If you wanna get in touch, talk to me about a project collaboration, give it an Email!"]} />
          </h4>
        </div>

        <div className="contact_body_container">
          <div className='contact_form contact_headings'>
            <FormControl onSubmit={() => handleSubmit()} sx={{width: "100%"}}>
              <div className='contact_up_cred'>
                <TextField sx={{marginBottom:"20px"}} fullWidth onChange={(e) => setName(e.target.value)} value={name} required color='primary' id="outlined-basic" label="Name" variant="outlined" />
                <TextField fullWidth error={emailError} onChange={(e) => changeEmail(e.target.value)} value={email} required type="email" id="filled-basic" label="Email Address" variant="outlined" />
              </div>
              
              <TextField sx={{marginBottom:"20px"}} minRows={5} onChange={(e) => setMessage(e.target.value)} value={message} required multiline id="standard-basic" label="Message" variant="outlined" />
              <Button sx={{minHeight:"50px"}} disabled={!name || !message || !email || emailError} type="submit" onClick={() => handleSubmit()} variant="outlined" endIcon={<SendIcon />}>Submit</Button>
            </FormControl>
            <Snackbar anchorOrigin={{vertical:"top", horizontal:"left"}} open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your Email has been received!
              </Alert>
            </Snackbar>
            { error && 
            <Snackbar anchorOrigin={{vertical:"top", horizontal:"left"}} open={error} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                There was an error sending your email, Please try again.
              </Alert>
            </Snackbar>}
          </div>  
              
          <div className='contact_social_media_links'>
            <Fade cascade>
              <div style={{backgroundColor: "rgb(38,38,38)"}}>
                <img src={require("../components/assets/github.png")} alt="github"/>
                <p>Github</p>
              </div>
              <div style={{backgroundColor: "rgb(0,119,181)"}}>
                <img src={require("../components/assets/linkedin.png")} alt="linkedin"/>
                <p>Linkedin</p>
              </div>
              <div style={{backgroundColor: "rgb(76,175,80)"}}>
                <img src={require("../components/assets/whatsapp.png")} alt="whatsapp"/>
                <p>Whatsapp</p>
              </div>
              <div style={{backgroundColor: "rgb(92,107,192)"}}>
                <img style={{width:"35px"}} src={require("../components/assets/discord.png")} alt="discord"/>
                <p>Discord</p>
              </div>
              <div style={{backgroundColor: "rgb(3,155,229)"}}>
                <img src={require("../components/assets/telegram.png")} alt="Telegram"/>
                <p>Telegram</p>
              </div>
              </Fade>
          </div>
        </div>
          
      </div>    
      </Fade>  
    </ThemeProvider>

  )
}

export default ContactUs;