import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Content from '../components/Content';
import Player from '../components/Player';
import Button from '../components/Button';
import CLIPS from '../clips';

class ClipPage extends Component {

  constructor(props) {
    super(props);
    this.getNewClipId = this.getNewClipId.bind(this);
  }

  getNewClipId(clips, currentClipId) {
    if (clips[Math.floor(Math.random()*clips.length)].id === currentClipId) {
      return this.getNewClipId(clips, currentClipId);
    } else {
      return clips[Math.floor(Math.random()*clips.length)].id;
    }
  }

  render() {
    const clipId = this.props.match.params.id;
    const thisClip = CLIPS.find((clip) => { return clip.id === clipId; });

    return (
      <section className="ClipPage">
        <Content AppBarHeader={ `Watching: ${thisClip.title}` }>
          <Player
            clip={ thisClip }
            height="324"
            width="576"
          />
          <Link to="/watch">
            <Button type="default" label="&lt; Go Back" />
          </Link>
          <Link to={ `/watch/${this.getNewClipId(CLIPS, thisClip.id)}` }>
            <Button type="success" label="New Clip" />
          </Link>
        </Content>
      </section>
    );
  }
}

export default ClipPage;
