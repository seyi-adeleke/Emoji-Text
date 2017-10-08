import React from 'react';
import PropTypes from 'prop-types';

class ButtonGoup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'btn btn-secondary',
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
    const emojis = ['😂', '😘', '😢', '🙈', '✊', '⚡', '💓', '💦'];
    return (
        <div className="btn-group" data-toggle="buttons">
            {emojis.map((emoji, index) => {
              return <label key={index} id={index}
              className={this.state.class}>
                         <input type="radio"
                         value={emoji}
                         onClick={this.handleEmojiChange} />{emoji}
                    </label>;
            })}
        </div>
    );
  }
}

ButtonGoup.propTypes = {
  getEmoji: PropTypes.string
};


export default ButtonGoup;
