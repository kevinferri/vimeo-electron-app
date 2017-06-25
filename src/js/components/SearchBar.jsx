import React, { Component } from 'react';
import '../../css/components/SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <input
        className='SearchBar'
        onChange={ this.props.onChange }
        onKeyPress={ this.props.onKeyPress }
        onFocus={ this.props.onFocus }
        { ...this.props }
      />
    );
  }
}

export default SearchBar;
