import React from 'react';
import AboutImage from '../images/about.jpg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage:`url(${AboutImage})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p >
            Grill Plate is a family owned business that was founded in 2021. We're dedicated to creating wonderful Dishes that you'll absolutely love. When you visit our shop, you won't believe your eyes with the incredible range of options that are available with us.     
            Without wonderful customers like you, our Resturant would never survive. That's why we're sure to say "thank you" to everyone who gives us their business and support. We're extremely thankful for our loyal customers and their love never falls short.
            Visit Grill Plate where you'll always be treated like family. Warm smiles and welcome greetings are our number one guarantee. Carryout and delivery options are available. Our dishes taste as good as they look!
            </p>
            <h3>Visit us once dishes are waiting for you. </h3>
        </div>
    </div>
  )
}

export default About;