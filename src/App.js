import React from 'react';
import './App.css';

const ImageDisplay = () => {
  const imageUrl = 'https://imagesreact.s3.amazonaws.com/IMG_8655+(1).jpg'; // Replace with your image URL
  const myImageStyle = { width: '200px', height: '200px' };

  return (
    <div className="App">
      <header className="App-header">
      <center><h1>Welcome to Dizzy Dish</h1></center>
      <br></br>
      <br></br>
        <img style={myImageStyle} className="App-logo" src={imageUrl} alt="Image" />
      </header>
    </div>

  );
};

export default ImageDisplay;
