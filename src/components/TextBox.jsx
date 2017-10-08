import React from 'react';
import PropTypes from 'prop-types';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleTextValue = this.handleTextValue.bind(this);
  }

  handleTextValue(text) {
    const textArray = text.replace(/\s+/, ' ').split(' ');
    return textArray.join(` ${this.props.emoji} `);
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <div>
            <input className="form-control form-control-lg"
            value={this.handleTextValue(this.props.getText)}
            type="text" placeholder="Copy Me" disabled/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


TextBox.propTypes = {
  emoji: PropTypes.string,
  getText: PropTypes.string
};

export default TextBox;
