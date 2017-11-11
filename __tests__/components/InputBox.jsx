import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';


import InputBox from '../../src/components/InputBox.jsx';


describe('InputBox Component', () => {
  it('should pass emojis as props', () => {
    const getInput = sinon.spy();
    const wrapper = shallow(<InputBox getInput={getInput} />);
    const event = { target: { value: 'spam' } };
    wrapper.find('input').simulate('change', event);
    expect(getInput).to.have.property('called');
  });
});
