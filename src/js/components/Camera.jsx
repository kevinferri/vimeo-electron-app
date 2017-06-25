import React, { Component } from 'react';
import '../../css/components/Camera.css';
import Button from './Button';

class Camera extends Component {
  componentDidMount() {
    navigator.webkitGetUserMedia({ video: true, audio: true }, (stream) => {
      const video = document.querySelector('.Camera__player');
      video.src = URL.createObjectURL(stream);
      video.onloadedmetadata = (e) => {
        // ready to go
      };
    }, () => {
      alert('Could not connect stream');
    });
  }

  render() {
    return (
      <div className="Camera">
        <div className="Camera__player-container">
          <video className="Camera__player" autoPlay />
        </div>
        <div className="Camera__recorder-container">
          <Button
            type="danger"
            label="Record"
          />
          <Button
            type="default"
            label="Pause"
          />
        </div>
      </div>
    );
  }
}

export default Camera;
