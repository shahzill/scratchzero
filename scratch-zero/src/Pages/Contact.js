import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import "../Styles/Contact.css";

const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_602vzrh', 'template_fh17fpe', form.current, '0A_HCuMcxEaqsECr5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };
  
    return (
        <section>
            <div className='contactContainer' id='ContactUs'>
                <h1>CONTACT US</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='Info'>
                    <input className='Name' type="text"
                    placeholder='Full Name'
                    name='user_name' required />
                    <input className='cont' type="text"
                    placeholder='Your Email or Phone Number'
                    name='user_email' required />
                    <input className='sub' type="text"
                    placeholder='Subject'
                    name='subject' required />
                    </div>
                    <div className='writtenText'>
                    <textarea placeholder='  Your Query' name='message'
                    cols="30" rows="10"></textarea>
                    </div>
                    
                    <button type='submit' >Send Message</button>
                </form>
            </div>
        </section>      
    );
  }

  export default ContactUs;