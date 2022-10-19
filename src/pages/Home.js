import React from 'react';
import{Link} from 'react-router-dom';
import BackImage from '../images/home.jpg';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home' style={{ backgroundImage:`url(${BackImage})`}}>
    <div className='headerContainer'>
        <h1>Eat Good Feel Good</h1>
        <p>From grill to plate</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
    </div>
    </div>
  )
}

export default Home;