import Contact from './pages/Contact.js';
import ImageHeader from './ImageHeader.js';
import ProjectsList from './ProjectsList.js';
import React, { useState } from 'react';
import ShortBio from './ShortBio.js';

const App = () => {
  const [showHome, setHomeState] = useState(true);
  return (
    <>
      {showHome  ? 
      <>
        <ImageHeader toggleHomePage={setHomeState} />
        <ShortBio />
        <ProjectsList />
      </>
        : 
      <>
        <Contact toggleHomePage={setHomeState} />
      </>}
    </>
  )
}

export default App;
