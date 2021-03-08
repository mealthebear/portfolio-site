import ContactMethodList from '../ContactMethodList.js';
import React, { useState } from 'react';

const Contact = (props) => {
  return (
    <div className="contact-container">
      <div className="contact-nav">
        <h1 className="contact-header">Dennis Chatkhan</h1>
        <button
          className="contact-button grey"
          onClick={() => props.toggleHomePage(true)} 
          type="button">Home
        </button>
        <h2 className="contact-subheading">
        Want to connect? Feel free to drop a line on LinkedIn or AngelList!
        </h2>
      </div>
      <ContactMethodList />
      {/* <p>
        <strong>LinkedIn:</strong>{' '}
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/dennischatkhan"
        >
          https://www.linkedin.com/in/dennischatkhan
        </a>
      </p>
      <p>
        <strong>AngelList:</strong>{' '}
        <a
          className="contact-link"
          href="https://angel.co/u/dennis-chatkhan"
        >
          https://angel.co/u/dennis-chatkhan
        </a>
      </p> */}
    </div>
  )
}

export default Contact;
