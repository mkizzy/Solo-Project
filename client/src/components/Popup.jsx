import React from 'react';
import './Popup.scss'

function Popup(props){
  return(props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className='Sign in'>Sign In</button>
        <button className='close-btn'>Close</button>
      </div>
    </div>
  ) : "";
}

export default Popup;