import React from 'react';
import ContactImage from '../images/contc.jpg'
import '../styles/Contact.css';
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'style={{ backgroundImage:`url(${ContactImage})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' >
            <label htmlFor='name'>Full Name</label>
            <input name='name' placeholder='Enter name...' type='text' required/>
            <label htmlFor='email'>Email</label>
            <input name='contact no' placeholder='Enter email..' type='email' required/>
            <label htmlFor='email'>Phone Number</label>
            <input name='email' placeholder='Enter Number...' type='number' required/>
            <label htmlFor='message'>Message</label>
            <textarea rows='6' placeholder='Enter message...' name='message' required></textarea>
            <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;