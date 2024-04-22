import React from 'react';
import '../Styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Assets/logo.png'

function Navbar() {
  return (
    <div className='nav-cont'>
        <div className='nav-items'>
            <div className='logo-cont'>
                <h2 className='logo-cont'><img src={Logo} style={{height:'70%'}}/></h2>
                <h3>Crypto Tracker</h3>
            </div>
            <div className='icons-cont'>
                <div className='icons'>
                    <p><FontAwesomeIcon icon={faSearch} />
</p>
                    <p><FontAwesomeIcon icon={faBars}/></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar