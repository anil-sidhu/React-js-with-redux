import React, { Component } from 'react';

class Loader extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                {
                    this.props.toggle ?
                        <div className="loader">
                        </div>
                        : <div className="">
                        </div>
                }
            </div>

        );
    } 
}


export default Loader; 
