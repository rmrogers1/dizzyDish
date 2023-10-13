import React from 'react';

const ImageDisplay = () => {
  const imageUrl = 'https://imagesreact.s3.amazonaws.com/IMG_8655+(1).jpg'; // Replace with your image URL

  return (
    <div>
      <h1>Image Display</h1>
      <img src={imageUrl} alt="Image" />
    </div>
  );
};

export default ImageDisplay;
