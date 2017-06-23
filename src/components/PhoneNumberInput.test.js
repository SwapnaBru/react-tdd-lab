import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import PhoneNumberInput from './PhoneNumberInput'

describe('PhoneNumberInput', () => {
    describe('has no props', () => {
        it('renders without crashing', () => {
            const wrapper = shallow(<PhoneNumberInput />)
            expect(wrapper).toHaveLength(1)
        })

        it('renders like it did last summer', () => {
            const tree = renderer.create(
                <PhoneNumberInput />
            ).toJSON()
            expect(tree).toMatchSnapshot()
        })

        it('doesn\'t crash when blurred', () => {
            const wrapper = shallow(<PhoneNumberInput />)

            wrapper.find('input').simulate('blur');
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
            const wrapper = shallow(<PhoneNumberInput validate={validator} />)
            wrapper.find('input').simulate('blur');

            expect(validator).toBeCalled()
        })

        it('calls the validator with value', () => {
            const validator = jest.fn()
            const wrapper = shallow(<PhoneNumberInput validate={validator} />)

            wrapper.setProps({ value: 'something' })
            wrapper.find('input').simulate('blur')

            expect(validator).toBeCalledWith('something')
        })

        describe('when validator returns a string', () => {
            it('displays the error', () => {
                const validator = jest.fn()
                const wrapper = shallow(<PhoneNumberInput validate={validator} />)

                validator.mockReturnValue('error message');
                wrapper.find('input').simulate('blur');

                expect(wrapper.find('.error').text()).toEqual('error message')
            })
        })

        describe('when validator returns undefined', () => {
            it('does not show any error', () => {
                const validator = jest.fn()
                const wrapper = shallow(<PhoneNumberInput validate={validator} />)

                validator.mockReturnValue(undefined);

                expect(wrapper.find('.error')).toHaveLength(0)
            })
        })
    })
})
