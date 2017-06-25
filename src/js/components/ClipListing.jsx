import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/ClipListing.css';

class ClipListing extends Component {
  render() {
    const {
      clip
    } = this.props;

    return (
      <article className="ClipListing">
        <Link className="ClipListing__link" to={ `/watch/${clip.id}` }>
          <img className="ClipListing__picture" src={ clip.picture } alt={ clip.title } />
          <h3 className="ClipListing__title">{ clip.title }</h3>
        </Link>
      </article>
    );
  }
}

export default ClipListing;
