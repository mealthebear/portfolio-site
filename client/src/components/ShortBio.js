import React, { useState } from 'react';

const ShortBio = () => {
  return (
    <div className="bio-container">
      <img
        alt="Waves washing up on the sandy shore"
        className="beach-image"
        src="/client/dist/images/beach_shore.jpg"
      />
      <div className="bio-text-container">
        <p className="bio-text-heading">
          My name's Dennis and <br/> 
          I'm a Software Engineer <br />
          in Los Angeles.
        </p>
        <p className="bio-text">
          I love solving challenging problems and working on collaborative teams
          to build spectacular applications. Creating apps that have a 
          significant impact in people's lives is what originally fueled me to 
          become a software engineer.
        </p>
        <p className="bio-text">
          In my spare time when I'm not coding, I love to go out on hikes
          in nature, play video games with friends, and cook up delectable
          cuisines in the kitchen that even Gordon Ramsay would fancy.
        </p>
      </div>
    </div>
  )
}

export default ShortBio;
