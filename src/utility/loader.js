import React, { Component } from 'react';

class Loader extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        console.warn(" loader comp",this.props.toggle )
        return (
            <div>
                {
                    this.props.toggle ?
                        <div className="loader">
                        </div>
                        : <div className="loaderw">
                        </div>
                }
            </div>

        );
    } 
}


export default Loader; 
