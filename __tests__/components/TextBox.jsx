import React from 'react';
import ReactDOM from 'react-dom';

import TextBox from '../../src/components/TextBox.jsx';

describe('Textbox Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextBox/>, div);
  });
});

