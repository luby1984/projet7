import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img src="./logoblack.png" alt="logo" width={100}/>
        </div>
        <div className='footer__text'>© 2020 Kasa. All rights reserved</div>

    </div>
  );
}

export default Footer