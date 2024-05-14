// pages/index.js

import React from 'react';

const PhotoGallery = () => {
  return (
    <div className="flex flex-wrap justify-center m-20">
      <div className="m-4">
        <img src="hisham.png" alt="Photo 1" className="max-w-full" />
      </div>
      <div className="m-4">
        <img src="sandra.png" alt="Photo 3" className="max-w-full" />
      </div>
    </div>
  );
};

export default PhotoGallery;
