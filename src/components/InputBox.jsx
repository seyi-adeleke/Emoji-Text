import React from 'react';
import PropTypes from 'prop-types';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.getInput(event.target.value);
  }

  render() {
    return (
      <div>
        <input className="form-control form-control-lg"
          value={this.state.value} active
          type="text" placeholder="Type Here" onChange={this.handleChange} />
      </div>
    );
  }
}

InputBox.propTypes = {
  getInput: PropTypes.string
};

export default InputBox;
