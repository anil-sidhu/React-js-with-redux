import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";
import {
    Valid,
    Numeric,
    Letter,
    AlphaNumeric,
    Email,
    CustomRx,
    Required, CustomInput, Dummy
} from '../utility/valid'

class ValidationComponent extends Component {
    state = {
        email: null,
    };
    submit() {
        // console.warn("Dummy", Dummy())
        // let letterNumber = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        // console.warn("value", this.state.mobile)
        // let result = Email(this.state.mobile);
        // console.warn("result", result)
        // this.setState({})
        console.warn("CustomInput", CustomInput.return)
    }

    render() {

        return (
            <div>
                Validation Component
                <input onBlur={() => { console.log(Required(this.state.mobile, null, 30)) }} onChange={(e) => { this.setState({ mobile: e.target.value }) }} rule="numeric" min="3" max="5" />
                <input onBlur={() => { console.log(Numeric(this.state.mobile, 4, 8)) }} onChange={(e) => { this.setState({ mobile: e.target.value }) }} rule="numeric" min="3" max="5" />

              
                <CustomInput  onChange={()=>this.submit()} />

                <button onClick={() => this.submit()}>click me </button>
            </div>
        )
    }
}

export default ValidationComponent;
