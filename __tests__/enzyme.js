import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import StatusTag from '../client/components/StatusTag';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('StatusTag', () => {
    it('renders a status tag', () => {
      const status = 'Accepted';
      const wrapper = shallow(<StatusTag status={status} />);

      // Check if an element in the Component exists
      expect(wrapper.find(<span>Accepted</span>)).toBeDefined();
    });
  });
});
