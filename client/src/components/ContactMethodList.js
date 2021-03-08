import ContactMethod from './ContactMethod.js';
import React, { useState } from 'react';

const ContactMethodList = () => {
  const contactsList = [
    { image: "/client/dist/images/linkedin_logo.png", name: "LinkedIn", url:"https://www.linkedin.com/in/dennischatkhan" },
    { image: "/client/dist/images/angellist_logo.png", name: "AngelList", url: "https://angel.co/u/dennis-chatkhan" },
  ];

  return (
    <div className="contact-list">
      {contactsList.map((contact, index) => {
        return <ContactMethod contactMethod={contact} index={index} />
      })}
    </div>
  )
}

export default ContactMethodList;
