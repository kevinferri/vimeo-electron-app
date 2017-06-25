import React, { Component } from 'react';
import '../../css/components/Button.css';

class Button extends Component {
  render() {
    const type = this.props.type || 'default';

    return (
      <button className={ `Button Button--${type}` }>
        { this.props.label }
      </button>
    );
  }
}

export default Button;
