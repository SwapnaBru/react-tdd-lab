import React from 'react';

export default class PhoneNumberInput extends React.Component {
    constructor() {
        super()

        this.onBlur = this.onBlur.bind(this)
        this.state = { validation: undefined }
    }

    onBlur() {
        if (this.props.onBlur) {
            const validation = this.props.onBlur.apply(this, arguments)
            this.setState({validation: validation})
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onBlur={this.onBlur} />
                { this.state.validation && <div className={"error"}>{this.state.validation}</div>}
            </div>
        )
    }
}
