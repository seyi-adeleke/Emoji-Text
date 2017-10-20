import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SweetAlert from 'sweetalert-react';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.handleCopy = this.handleCopy.bind(this);
    this.tweeterShare = this.tweeterShare.bind(this);
    this.validateText = this.validateText.bind(this);
  }
  tweeterShare() {
    if (this.validateText(this.props.getText)) {
      window.open(`https://twitter.com/intent/tweet?text=${this.props.getText} – http://emojiText.cc`);
    }
  }

  validateText(text) {
    if (text.length === 0) {
      return false;
    }
    return true;
  }

  handleCopy() {
    if (this.validateText(this.props.getText)) {
      this.setState({
        show: true
      });
    }
  }

  render() {
    return (
      <div className="field">
        <div className="control">
          <textarea className="textarea"
            value={this.props.getText}
            type="text" placeholder="Copy Me"
          />
          <SweetAlert
            show={this.state.show}
            title="Emoji Text"
            text="Copied"
            onConfirm={() => this.setState({ show: false })}
            onOutsideClick={() => this.setState({ show: false })}
          />
          <div className="has-text-centered">
            <CopyToClipboard text={this.props.getText}>
              <button className="button is-primary is-outlined copy"
                onClick={this.handleCopy}>Copy</button>
            </CopyToClipboard>
            <button className="button is-primary is-outlined copy"
              onClick={this.tweeterShare}
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
              <span>Share on Twitter</span>
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
