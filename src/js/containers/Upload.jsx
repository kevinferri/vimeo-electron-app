import React, { Component } from 'react';
import Content from '../components/Content';
import Camera from '../components/Camera';

class Upload extends Component {
  render() {
    return (
      <section className="Upload">
        <Content AppBarHeader="Upload">
          <Camera />
        </Content>
      </section>
    );
  }
}

export default Upload;
