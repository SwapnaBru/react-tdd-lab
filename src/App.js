import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PhoneNumberInput from './components/PhoneNumberInput'
import phoneNumberValidator from './validators/phoneNumber'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            valid: undefined,
            phoneNumber: ''
        }

        this.validate = this.validate.bind(this)
        this.change = this.change.bind(this)
    }

    validate(value) {
        console.log(`VALUE: ${value}`)
        let result = phoneNumberValidator(value)
        this.setState({valid: typeof result === 'undefined'})

        return result
    }

    change({target: { value }}) {
        this.setState({ phoneNumber: value })
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, please type in your phone number: <br />
        </p>
        <PhoneNumberInput value={this.state.phoneNumber} onChange={this.change} validate={this.validate} />

        <pre id="valid">{JSON.stringify(this.state.valid)}</pre>
      </div>
    );
  }
}

export default App;
