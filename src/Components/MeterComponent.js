import React, { Component } from 'react';
import Container from '../Containers/Container';
import ReactSpeedometer from "react-d3-speedometer";

class MeterComponent extends Component {
  render() {
    return (
      <div>
        <ReactSpeedometer
          maxValue={20}
          value={this.props.speedReply}
          needleColor="red"
          startColor="green"
          segments={1}
          endColor="blue"
        />
      </div>

    );
  }
}


export default MeterComponent; 
