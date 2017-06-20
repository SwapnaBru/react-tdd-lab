import React from 'react';

export default class PhoneNumberInput extends React.Component {
    constructor() {
        super()

        this.onBlur = this.onBlur.bind(this)
    }

    onBlur() {
        if (this.props.onBlur) {
            this.props.onBlur.apply(this, arguments)
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onBlur={this.onBlur} />
            </div>
        )
    }
}
