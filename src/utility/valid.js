import React, { Component } from 'react';
class Valid extends Component {
    constructor() {
        super()
        this.state = {
            errorMsg: "",

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

            console.warn("..")
            Test("false")
            this.setState({
                showError: true,
                errorMsg: "Please Write Number Only"
            })
        }
        else {
            Test("true")
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
                <input  outFoue={this.props.onClick} style={{ display: 'block' }} onChange={(e) => this.ruleTest(e)} type="Text" />
            </div>
        )
    }

};


export const  Test=(data)=>
{
    return "data"+data
}

export default Valid;