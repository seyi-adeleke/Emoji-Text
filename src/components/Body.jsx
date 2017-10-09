import React from 'react';
import InputBox from './InputBox.jsx';
import TextBox from './TextBox.jsx';
import ButtonGroup from './ButtonGroup.jsx';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', emoji: '😂' };
    this.handleInput = this.handleInput.bind(this);
    this.handleEmoji = this.handleEmoji.bind(this);
  }

  handleInput(event) {
    this.setState({
      text: event
    });
  }

  handleEmoji(newEmoji) {
    this.setState({ emoji: newEmoji }, () => {
      // return (this.state.emoji);
    });
  }

  createEmojiText(text, emoji) {
    const textArray = text.replace(/\s+/, ' ').split(' ');
    const emojiText = textArray.join(` ${emoji} `);
    return emojiText;
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter has-text-centered is-size-1-desktop is-size-1-mobile">
          <h1 className="has-text-weight-bold">
            Emoji Text
            </h1>
          <InputBox getInput={this.handleInput} />
          <TextBox getText={this.createEmojiText(this.state.text, this.state.emoji)} />
          <ButtonGroup getEmoji={this.handleEmoji} />
        </div>
      </div>
    );
  }
}

export default Body;
