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

            wrapper.find('.ft-input').simulate('blur');
        })

        it('doesn\'t crash when changing', () => {
            const wrapper = shallow(<PhoneNumberInput />)

            wrapper.find('.ft-input').simulate('change', {target: {value: 'My new value'}});
        })
    })

    describe('has value', () => {
        it('renders input field with value', () => {
            const wrapper = shallow(<PhoneNumberInput value={"react"} />)
            expect(wrapper.find("input").props().value).toEqual('react')
        })
    })

    describe('has onChange', () => {
        describe('on change', () => {
            it('calls onChange with the new value', () => {
                const change = jest.fn()
                const wrapper = shallow(<PhoneNumberInput onChange={change} />)

                wrapper.find('.ft-input').simulate('change', {target: {value: 'My new value'}});

                expect(change).toBeCalledWith({ target: {value: 'My new value'}})
            })
        })
    })

    describe('has validator', () => {
        it('calls the validator function on blur', () => {
            const validator = jest.fn()
            const wrapper = shallow(<PhoneNumberInput validate={validator} />)
            wrapper.find('.ft-input').simulate('blur');

            expect(validator).toBeCalled()
        })

        describe('when value prop changes', () => {
            it('calls the validator with value', () => {
                const validator = jest.fn()
                const wrapper = shallow(<PhoneNumberInput validate={validator} />)

                wrapper.setProps({ value: 'something' })
                wrapper.find('.ft-input').simulate('blur')

                expect(validator).toBeCalledWith('something')
            })
        })

        describe('when input changes', () => {
            it('calls the validator with new value', () => {
                const validator = jest.fn()
                const wrapper = shallow(<PhoneNumberInput validate={validator} />)

                wrapper.find('.ft-input').simulate('change', {target: {value: 'My new value'}});
                wrapper.find('.ft-input').simulate('blur')

                expect(validator).toBeCalledWith('My new value')
            })
        })

        describe('when validator returns a string', () => {
            it('displays the error', () => {
                const validator = jest.fn()
                const wrapper = shallow(<PhoneNumberInput validate={validator} />)

                validator.mockReturnValue('error message');
                wrapper.find('.ft-input').simulate('blur');

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
