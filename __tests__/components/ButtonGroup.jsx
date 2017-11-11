import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
// import Adapter from 'enzyme-adapter-react-15';

import ButtonGroup from '../../src/components/ButtonGroup.jsx';

// Enzyme.configure({ adapter: new Adapter() });

describe('Button Component', () => {
  it('should match the Button snapshot', () => {
    const component = mount(<ButtonGroup />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
