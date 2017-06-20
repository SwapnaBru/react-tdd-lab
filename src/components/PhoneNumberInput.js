import React from 'react';

export default class PhoneNumberInput extends React.Component {
    constructor() {
        super()

        this.onChange = this.onChange.bind(this)
    }

    onChange() {
        if (this.props.onChange) {
            this.props.onChange.apply(this, arguments)
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.onChange} />
            </div>
        )
    }
}
