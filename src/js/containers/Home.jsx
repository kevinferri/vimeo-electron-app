import React, { Component } from 'react';
import Content from '../components/Content';

class Home extends Component {
  render() {
    return (
      <section className="Home">
        <Content AppBarHeader="Home">
          Welcome to the Vimeo Desktop App
        </Content>
      </section>
    );
  }
}

export default Home;
