import React from 'react';
import MediaQuery from 'react-responsive';

const ImageDisplay = () => {
  const imageUrl = 'https://imagesreact.s3.amazonaws.com/IMG_8655+(1).jpg'; // Replace with your image URL
  const myImageStyle = { width: '500px', height: '500px' };

  return (
    <MediaQuery minWidth={767}>
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <center>
      <h1>Welcome to Dizzy Dish</h1>
      <img style={myImageStyle} src={imageUrl} alt="Image" />
      </center>
    </div>
    </MediaQuery>
  );
};

export default ImageDisplay;
