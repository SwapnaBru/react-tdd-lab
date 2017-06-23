import React from 'react';

export default class PhoneNumberInput extends React.Component {
    constructor() {
        super()

        this.validate = this.validate.bind(this)
        this.state = { validation: undefined }
    }

    validate(e) {
        if (this.props.validate) {
            const validation = this.props.validate.apply(this, arguments)
            this.setState({validation: validation})
        }
    }

    change(e) {

    }

    render() {
        return (
            <div>
                <input type="text" defaultValue={this.props.value} onBlur={this.validate} />
                { this.state.validation && <div className={"error"}>{this.state.validation}</div>}
            </div>
        )
    }
}
