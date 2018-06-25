import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Valid,{Test} from '../utility/valid'

class ValidationComponent extends Component {
    state = {
        showingInfoWindow: false,
    };

submit()
{
    
    console.warn("data",Test())
}
    render() {
        
        return (
            <div>
                Validation Component
                <Valid  onClick={()=>alert("test")} rule="numeric" min="3" max="5" />
                <Valid rule="alphabetic" />
                <button onClick={()=>this.submit()}>click me </button>
            </div>
        )
    }
}



export default ValidationComponent;
