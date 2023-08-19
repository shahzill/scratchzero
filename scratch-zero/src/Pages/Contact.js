import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import "../Styles/Contact.css";
import { message, Alert} from "antd";


const ContactUs = () => {
    
    const form = useRef();

    const [showAlert, setShowAlert] = useState(false);
    const sendEmail = (e) => {
        setShowAlert(false)
      e.preventDefault();
  
      emailjs.sendForm('service_602vzrh', 'template_fh17fpe', form.current, '0A_HCuMcxEaqsECr5')
        .then((result) => {
            console.log(result.text);
            setTimeout(() => { 
               setShowAlert(true)
            });
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
        
    };
  
    return (
        <section>
            <div className='contactContainer' id='ContactUs'>
                <h1>Fill out the<span className='Red'> form</span></h1>
                <form ref={form} onSubmit={sendEmail}>
                {showAlert&&
                    <Alert className='alert' type='success' 
                    description='Your message was sent successfully. We will get back to you shortly.'/>}
                    <div className='Info'>
                    <input className='Name' type="text"
                    placeholder='Full Name'
                    name='user_name' required />
                    <input className='cont' type="text"
                    placeholder='Your Email or Phone Number'
                    name='user_email' required />
                    <input className='sub' type="text"
                    placeholder='Subject'
                    name='user_subject' required />
                    </div>
                    <div className='writtenText'>
                    <textarea placeholder='  Your Query' name='message' required 
                    cols="30" rows="10"></textarea>
                    </div>
                    
                    <button type='submit' >Send Message</button>
                   
                </form>
            </div>
        </section>      
    );
  }

  export default ContactUs;