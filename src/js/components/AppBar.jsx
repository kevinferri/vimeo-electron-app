import React, { Component } from 'react';
import '../../css/components/AppBar.css';
import SearchBar from './SearchBar';

class AppBar extends Component {
  handleChange(event) {
    //
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      // Fetch videos from api
    }
  }

  render() {
    return (
      <div className="AppBar">
        <header className="AppBar__header">
          <h2 className="AppBar__title">{ this.props.header }</h2>
          {
            this.props.searchBar ?
              <SearchBar
                placeholder="Search for a clip&hellip;"
                onChange={ this.handleChange.bind(this) }
                onKeyPress={ this.handleKeyPress.bind(this) }
              />
              : null
          }
        </header>
      </div>
    );
  }
}

export default AppBar;
