import React from 'react';
import {shallow} from 'enzyme';
import PhoneNumberInput from './PhoneNumberInput'

describe('PhoneNumberInput', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<PhoneNumberInput />)
        expect(wrapper).toHaveLength(1)
    })


})
