import React from 'react';

export default class PhoneNumberInput extends React.Component {
    constructor(props) {
        super(props)

        this.validate = this.validate.bind(this)
        this.change = this.change.bind(this)

        this.state = {
            validation: undefined,
            value: props.value
        }
    }

    validate() {
        if (this.props.validate) {
            const validation = this.props.validate.call(this, this.state.value)
            this.setState({validation: validation})
        }
    }

    change({target: {value}}) {
        if (this.props.onChange) {
            this.props.onChange.apply(this, arguments)
        }

        this.setState({ value: value })
    }

    componentWillReceiveProps({value}) {
        this.setState({value: value})
    }

    render() {
        return (
            <div>
                <input type="text" className="ft-input" value={this.props.value} onBlur={this.validate} onChange={this.change} />
                { this.state.validation && <div className={"error"}>{this.state.validation}</div>}
            </div>
        )
    }
}
