import React from 'react';

const ImageDisplay = () => {
  const imageUrl = 'https://imagesreact.s3.amazonaws.com/IMG_8655+(1).jpg'; // Replace with your image URL

  return (
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <center>
      <h1>Welcome to Dizzy Dish</h1>
      <img src={imageUrl} alt="Image" />
      </center>
    </div>
  );
};

export default ImageDisplay;
