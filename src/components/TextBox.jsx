import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.handleCopy = this.handleCopy.bind(this);
    this.setActivity = this.setActivity.bind(this);
  }

  handleCopy() {
    if (this.props.getText.length === 0) {
      return;
    }
    this.setState({
      copied: true
    });
  }

  setActivity() {
    this.setState({
      copied: true
    });
  }
  render() {
    return (
      <div className="field">
        <div className="control">
          <textarea className="textarea"
            value={this.props.getText}
            type="text" placeholder="Copy Me"
            onChange={this.setActivity}
          />
          {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}

          <div className="has-text-centered">
          <CopyToClipboard text={this.props.getText}>
            <button className="button is-primary copy"
            onClick={this.handleCopy}>Copy</button>
          </CopyToClipboard>
          <button className="button is-primary copy">
            <span className="icon">
              <i className="fa fa-twitter"/>
            </span>
            <span>Twitter</span>
          </button>
          <button className="button is-primary copy">
            <span className="icon">
              <i className="fa fa-facebook"/>
            </span>
            <span>Facebook</span>
          </button>
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
