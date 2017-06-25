import React, { Component } from 'react';
import '../../css/components/Player.css';

class Player extends Component {
  render() {
    const {
      clip
    } = this.props;

    return (
      <div className="Player">
        <iframe
          src={ `https://player.vimeo.com/video/${clip.id}` }
          height={ this.props.height }
          width={ this.props.width }
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Player;
