import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Body from '../../src/components/Body.jsx';


describe('Body Component', () => {
  it('should match the Body snapshot', () => {
    const component = shallow(<Body />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
