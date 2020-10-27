import React, { useState } from 'react';

const ImageHeader = () => {
  return (
    <>
      <div className="header-container">
        <div className="title-container">
          <h2 className="header-title">Dennis Chatkhan</h2>
          <button className="contact-button">Contact</button>
        </div>

        <p className="header-intro">
          Welcome to my site!<br />
          Learn more about me below.
        </p>

        <img
          alt="Bear sitting on grass in a forest"
          className="bear-image"
          src="/client/dist/images/sitting_bear.jpg"
        />
      </div>
    </>
  )
}

export default ImageHeader;
