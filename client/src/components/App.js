import ImageHeader from './ImageHeader.js';
import ProjectsList from './ProjectsList.js';
import React, { useState } from 'react';
import ShortBio from './ShortBio.js';

const App = () => {
  return (
    <div>
      <ImageHeader />
      <ShortBio />
      <ProjectsList />
    </div>
  )
}

export default App;
