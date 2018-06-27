import React, { Component } from 'react';
export class Valid extends Component {
    constructor() {
        super()
        this.state = {
            errorMsg: "",
            return: false,
            style: {
                color: 'red'
            }
        }
    }
    ruleTest(e) {

        switch (this.props.rule) {
            case "numeric":
                {

                    this.numericRule("numeric", e.target.value, this.props.min, this.props.max)
                    break
                }
            case "alphabetic":
                {
                    this.alphabeticRule("numeric", e.target.value)
                    break
                }
        }
    }
    numericRule(numeric, data, min = null, max = null, ) {

        if (isNaN(data)) {

            this.setState({
                showError: true,
                errorMsg: "Please Write Number Only"
            })
        }
        else {

            this.setState({
                errorMsg: ""
            })
        }
    }
    alphabeticRule(numeric, data, max = null, min = null, ) {
        if (!isNaN(data)) {
            this.setState({
                showError: true,
                errorMsg: "Please Write alphabetic Only"
            })
        }
        else {
            this.setState({
                errorMsg: ""
            })
        }
    }
    render() {

        return (
            <div>
                <span style={{ color: 'red', height: "12px", display: "inline-block" }}>{this.state.errorMsg}</span>
                <input onClick={this.props.onClick} style={{ display: 'block' }} onChange={(e) => this.ruleTest(e)} type="Text" />
            </div>
        )
    }

};

export const Required = function (data, min = null, max = null) {
    let errorMsg = {};
    data ? data : data = ''
    if (data.length < 1) {
        errorMsg.msg = "Please Enter Some Value"
        errorMsg.status = false
    }
    else if (min || max) {
        errorMsg = lengthValidator(data, min, max)
    }
    else {
        errorMsg.msg = "Correct Value"
        errorMsg.status = true
    }
    return errorMsg;
}
export const Numeric = function (data, min = null, max = null) {
    let errorMsg = {};
    data ? data : data = ''

    if (isNaN(data)) {
        errorMsg.msg = "Please type Number only"
        errorMsg.status = false
    }
    else if (min || max) {
        errorMsg = lengthValidator(data, min, max)
    }
    else {
        errorMsg.msg = "Correct Value"
        errorMsg.status = true
    }
    return errorMsg;
}
export const Letter = function (data = '', min = null, max = null) {
    let errorMsg = {};
    let letters = /^[A-Za-z]+$/;
    data ? data : data = ''
    if (data.match(letters)) {
        errorMsg.msg = "Correct Value"
        errorMsg.status = true
    }
    else if (min || max) {
        errorMsg = lengthValidator(data, min, max)
    }
    else {
        errorMsg.msg = "Please type letters only"
        errorMsg.status = false
    }
    return errorMsg;
}

export const AlphaNumeric = function (data = '', min = null, max = null) {
    let errorMsg = {};
    let letterNumber = /^[0-9a-zA-Z]+$/;
    data ? data : data = ''
    if (data.match(letterNumber)) {
        errorMsg.msg = "Correct Value"
        errorMsg.status = true
    }
    else if (min || max) {
        errorMsg = lengthValidator(data, min, max)
    }
    else {
        errorMsg.msg = "Please type letters and number only "
        errorMsg.status = false
    }
    return errorMsg;
}

export const Email = function (data = '') {
    let errorMsg = {};
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    data ? data : data = ''
    if (data.match(email)) {
        errorMsg.msg = "Correct Value"
        errorMsg.status = true
    }
    else {
        errorMsg.msg = "Please Enter Valid Email Address"
        errorMsg.status = false
    }
    return errorMsg;
}


export const CustomRx = function (data = '', spChar = null, capChar = null, min = null, max = null) {

    let errorMsg = {};
    //         let letterNumber = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let rx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
    let specialChar = /(?=.*?[#?!@$%^&*-])/;
    let capitalChar = /^(?=.*?[A-Z])/
    if (spChar) {
        if (!data.match(specialChar)) {
            errorMsg.msg = "Please Enter at least one Special character"
            errorMsg.status = false
            return errorMsg
        }
    }
    if (capChar) {
        if (!data.match(capitalChar)) {
            errorMsg.msg = "Please Enter at least one capital letter"
            errorMsg.status = false
            return errorMsg
        }
    }
    if (min || max) {
        errorMsg = lengthValidator(data, min, max)
    }
    return errorMsg;
}


function lengthValidator(data, min = null, max = null) {

    let errorMsg = {}
    let maxStatus = false
    let minStatus = false
    max ? data.length > max ? maxStatus = false : maxStatus = true : null
    min ? data.length < min ? minStatus = false : minStatus = true : null

    if (min && data.length < min) {
        errorMsg.status = false;
        errorMsg.msg = 'Minimum length should be ' + min
        return errorMsg;
    }
    else if (max && data.length > max) {
        errorMsg.status = false;
        errorMsg.msg = 'Maximum length should be ' + max
        return errorMsg;
    }
    // if (!minStatus!maxStatus) {
    //     errorMsg.status = false;
    //     errorMsg.msg = minStatus ? 'Minimum length should be ' + min : 'Maximum length should be ' + max;
    // }
    else {
        errorMsg.msg = "Correct"
    }
    return errorMsg
}

// export const CustomInput=({component: Dummy, ...rest})=>
// (   <div>
//         {...rest}
//     render={props => 
//         <Dummy {...props} />
//     } 
//        </div> 
// )


// export const CustomInput = ({ component: Dummy, ...rest }) => (

//      <div
//          {...rest}
//          render={props => 

//                  <input {...props} />



//          }  
//      />
//  );

// export const CustomInput = ({ ...props, }) => ({


//     test() {
//         alert("here")
//     },
//      testapp:"",
//     value: "100",
//     render() {
//         console.warn("props",this.props.onClick )
//         if(this.props.onClick)
//             {
//                 alert("test")
//             }
//         return (
//             <div>
//                 <input value={this.value} onClick={() => { this.test() }} type="text" {...this.props} />
//             </div>


//         );
//     }
// })
let test = 100


export class CustomInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: 10,
        }
    }
    static return = false
    tryTest(e) {
        if (isNaN(e.target.value)) {
            CustomInput.return = true
        }
        else {
            CustomInput.return = false
        }
        this.props.onChange()
    }

    render() {
        console.warn("static test", CustomInput.test, typeof (CustomInput.test))
        return (
            <div>
                <input {...this.props} onChange={(e) => this.tryTest(e)} type="text" />
            </div>
        );
    }
}
export const Dummy = function () {
    return test
}