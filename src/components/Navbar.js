import React, {useState} from 'react';
import Logo from '../images/dinnerLogo.png';
import{Link} from 'react-router-dom';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import '../styles/Navbar.css';
function Navbar() {
    const[showLinks, setShowLinks] = useState(false);
    const toggleNavbar = () => {
        setShowLinks(!showLinks);
        
    };

  return (
     <div className='navbar'>
        <div className='leftSide' id={showLinks ?  "open" : "close"}>
            <h3>Grill Plate</h3>
            <img src={Logo} alt=''/>
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        
        </div>
        <div className='rightSide' >
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}>
          <ReorderSharpIcon />
        </button>
        </div>
    </div>
  )  
}

export default Navbar;