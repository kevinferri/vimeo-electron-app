import React, { Component } from 'react';
import '../../css/components/Content.css';
import AppBar from '../components/AppBar';

class Content extends Component {
  render() {
    return (
      <section className="Content">
        <AppBar searchBar={ this.props.searchBar } header={ this.props.AppBarHeader } />
        <div className="Content__container">
          { this.props.children }
        </div>
      </section>
    );
  }
}

export default Content;
