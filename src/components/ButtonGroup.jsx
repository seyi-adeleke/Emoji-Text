import React from 'react';
import PropTypes from 'prop-types';

class ButtonGoup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleEmojiChange = this.handleEmojiChange.bind(this);
  }


  handleEmojiChange(event) {
    event.preventDefault();
    this.props.getEmoji(event.target.value);
    this.setState({
      emoji: event.target.value,
    });
  }


  render() {
    const emojis = ['😂', '😘', '😢', '🙈', '✊', '⚡', '💓', '💦', '💅', '🔪', '🔥', '🖕'];
    return (
      <div className="field is-grouped is-grouped-multiline has-text-centered">
        {
          emojis.map((emoji, index) => {
            return <p className="control" key={index}>
                      <button className="button"
                      value={emoji}
                      onClick={this.handleEmojiChange}>
                      {emoji}
                     </button>
                  </p>;
          })
        }
      </div>
    );
  }
}

ButtonGoup.propTypes = {
  getEmoji: PropTypes.string
};


export default ButtonGoup;
