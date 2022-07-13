import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer() {
 
    return (
      <div className='dood-footer'>
        <div className='dood-container'>
          Copyright © 2022 DoodCats - All Rights Reserved.
          <ul className='social_link'>
            <li><a><FontAwesomeIcon className='social_icon' icon="fa-brands fa-twitter" /></a></li>
            <li><a><FontAwesomeIcon className='social_icon' icon="fa-brands fa-instagram" /></a></li>
            <li><a><FontAwesomeIcon className='social_icon' icon="fa-brands fa-discord" /></a></li>
          </ul>
        </div>
      </div>
    );
  }
  