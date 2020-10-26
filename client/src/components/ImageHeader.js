import React, { useState } from 'react';

const ImageHeader = () => {
  return (
    <>
      <div className="header-container">
        <div className="title-container">
          <h2 className="header-title">Dennis Chatkhan</h2>
          <button className="contact-button">Contact</button>
        </div>

        

        <img
          className="bear-image"
          src="/client/dist/images/sitting_bear.jpg"
        />
      </div>
    </>
  )
}

export default ImageHeader;
