# TDD with React, Jest and Enzyme

## Prerequisites
* nodejs >= 6 (see https://nodejs.org/en/download/ )
* npm or yarn

## 1. Basic TDD of a function
Create a function which validates a string that contains a North American (NANPA) phone number.
It should contain the following characteristics:
* it must contain exactly 10 digits (0-9)
* if it contains separators, the digits must be in groups of 3, 3, 4. E.g., 647-555-1212
* valid separators are spaces ` ` or dashes `-`
* no other characters are permitted

When the input is valid, the function will return `undefined`
When the input is invalid, the function will return a string containing an error message to display

## 2. Basic TDD of a React Component
* Install enzyme: `npm install --save-dev enzyme`

Create a component that renders an input field
* it has a prop called validate, which takes a function
* the component should render if validate is not provided
* on blur, the component should call validate with the input field's value
* initially, the input field's border should be black
* if the validate function returns undefined, the input was valid. The border of the input field should turn green
* if the validate function returns a string, the input was invalid. The border of the input field should turn red

## 3. Integration tests
*
