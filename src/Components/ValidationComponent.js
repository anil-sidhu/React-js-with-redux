import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";
import {
    Valid,
    Letter,
    Email,
    CustomRx,
    Required, Dummy
} from '../utility/valid'
import { NumberInput, Numeric,EmailInput,LetterInput,AlphaNumericInput } from './src/index.js'


class ValidationComponent extends Component {
    state = {
        email: null,
        style: {}
    };
    submit() {
        // console.warn("Dummy", Dummy())
        // let letterNumber = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        // console.warn("value", this.state.mobile)
        // let result = Email(this.state.mobile);
        // console.warn("result", result)
        // this.setState({})
        console.warn("CustomInput", NumberInput.return)
    }

    render() {
        this.state.style = { color: 'green' }
        return (
            <div>
                {/* Validation Component */}
                {/* <input onBlur={() => { console.log(Required(this.state.mobile, null, 30)) }} onChange={(e) => { this.setState({ mobile: e.target.value }) }} rule="numeric" min="3" max="5" />*/}
                <input onBlur={() => { console.log(Numeric(this.state.mobile, 4, 8)) }} onChange={(e) => { this.setState({ mobile: e.target.value }) }} rule="numeric" min="3" max="5" />
                <NumberInput styleError={{ color: 'green', display: 'block' }} onBlur={() => this.submit()} />
                <LetterInput styleError={{ color: 'red', display: 'block' }} onBlur={() => this.submit()} />
                <AlphaNumericInput styleError={{ color: 'blue', display: 'block' }} onBlur={() => this.submit()} />
               
                <button errorPost="" onClick={() => this.submit()}>click me </button>
            </div>
        )
    }
}

export default ValidationComponent;
