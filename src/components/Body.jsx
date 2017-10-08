import React from 'react';
import InputBox from './InputBox.jsx';
import TextBox from './TextBox.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import PropTypes from 'prop-types';

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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
              <h1 className="text-center">Hello world</h1>
              <InputBox getInput={this.handleInput} />
              <TextBox getText={this.state.text} emoji={this.state.emoji}/>
              <ButtonGroup getEmoji={this.handleEmoji}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
