import {
    Valid,
    Letter,
    AlphaNumeric,
    Email,
    CustomRx, Numeric,
    Required, Dummy
} from '../Function'

import React, { Component } from 'react';
export class NumberInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            errorStatus: '',
            errorMsg: false
        }
    }
    static return = false
    numeric(e) {
        if (isNaN(e.target.value)) {
            NumberInput.return = false
            this.setState({ errorStatus: true, errorMsg: 'Please Enter number only ' })

        }
        else {
            NumberInput.return = true

        }

        if (this.props.onChange) {
            this.props.onChange()
        }
    }

    Valid(data) {
        let result = Numeric(data, 4, 8);
        console.warn("result", result)
        if (result.status) {
            this.setState({ errorStatus: false, errorMsg: '' })
        }
        else {
            this.setState({ errorStatus: true, errorMsg: result.msg })

        }
        if (this.props.onChange) {
            this.props.onChange()
        }
        NumberInput.return = result
    }
    render() {
        return (
            <div >
                <span className="error-span" style={this.props.styleError} >
                    {this.state.errorStatus ? this.state.errorMsg : null}
                </span>
                <input  {...this.props} onChange={(e) => this.Valid(e.target.value)} type="text" />
            </div>
        );
    }
}

