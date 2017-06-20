import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import PhoneNumberInput from './PhoneNumberInput'

describe('PhoneNumberInput', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<PhoneNumberInput />)
        expect(wrapper).toHaveLength(1)
    })

    it('renders correctly', () => {
      const tree = renderer.create(
        <PhoneNumberInput />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
})
