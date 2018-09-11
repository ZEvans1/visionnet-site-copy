import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';

import { Image } from 'react-bootstrap';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="big-image-div">
          <p className="image-slogan">Your Vision. <strong>Our Network.</strong></p>
          <Image className="big-image" alt="nature" src="http://gregmolyneuxphotography.com/wp-content/uploads/2017/10/midas-on-the-marsh.jpg"/>
        </div>

      </div>
    );
  }
}

export default App;
