import React, { useState } from 'react';

const Contact = (props) => {
  return (
    <div className="contact-container">
      <h1
        className="contact-header"
        onClick={() => props.toggleHomePage(true)}>
        Dennis Chatkhan
      </h1>
      <h2>Want to connect? Feel free to drop a line on LinkedIn or AngelList!</h2>
      <p>
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
      </p>
    </div>
  )
}

export default Contact;
