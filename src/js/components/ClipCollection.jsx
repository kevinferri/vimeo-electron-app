import React, { Component } from 'react';
import ClipListing from './ClipListing';

class ClipCollection extends Component {
  render() {
    const clipCollection = this.props.clips.map(clip => (
      <ClipListing
        clip={ clip }
        key={ clip.id * Math.random() }
      />
    ));
    return (
      <div className="ClipCollection">
        { clipCollection }
      </div>
    );
  }
}

export default ClipCollection;
