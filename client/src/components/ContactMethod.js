import React, { useState } from 'react';

const ContactMethod = ({ contactMethod, index }) => {
  return (
    <div className="personal-contact" key={index}>
      <a href={contactMethod.url} target="_blank">
        <img className="contact-image" src={contactMethod.image} />
      </a>
      <h3>{contactMethod.name}</h3>
    </div>
  )
}

export default ContactMethod;
