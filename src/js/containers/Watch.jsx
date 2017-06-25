import React, { Component } from 'react';
import Content from '../components/Content';
import ClipCollection from '../components/ClipCollection';
import CLIPS from '../clips';

class Watch extends Component {
  render() {
    return (
      <section className="Watch">
        <Content searchBar AppBarHeader="Watch">
          <ClipCollection clips={ CLIPS } />
        </Content>
      </section>
    );
  }
}

export default Watch;
