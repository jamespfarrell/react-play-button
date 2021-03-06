import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
};

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Play main',
    };
    this.play = this.play.bind(this);
    this.getButtonText = this.getButtonText.bind(this);
  }

  getButtonText() {
    return this.props.isPlaying === true ? (
      <i className="fa fa-stop-circle fa-6" aria-hidden="true" />
    ) : (
      <i className="fa fa-play-circle fa-6" aria-hidden="true" />
    );
  }

  play() {
    this.props.playButtonClick();
  }

  render() {
    return (
      <button
        style={buttonStyle}
        className={this.props.class}
        onClick={this.play}
      >
        {this.getButtonText()}
      </button>
    );
  }
}
PlayButton.propTypes = {
  playButtonClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
export default PlayButton;
