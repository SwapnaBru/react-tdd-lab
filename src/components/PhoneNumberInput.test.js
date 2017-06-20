import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import PhoneNumberInput from './PhoneNumberInput'

describe('PhoneNumberInput', () => {
    describe('no props', () => {
        it('renders without crashing', () => {
            const wrapper = shallow(<PhoneNumberInput />)
            expect(wrapper).toHaveLength(1)
        })

        it('renders correctly', () => {
            const tree = renderer.create(
                <PhoneNumberInput />
            ).toJSON()
            expect(tree).toMatchSnapshot()
        })
    })

    describe('has value', () => {
        it('renders input field with value', () => {
            const wrapper = shallow(<PhoneNumberInput value={"react"} />)
            expect(wrapper.find("input").props().value).toEqual('react')
        })
    })

    describe('has validator', () => {
        it('calls the validator function on blur', () => {
            const validator = jest.fn()
            const wrapper = shallow(<PhoneNumberInput onBlur={validator} />)

            wrapper.find('input').simulate('blur');

            expect(validator.mock.calls.length).toBe(1)
        })
    })
})
