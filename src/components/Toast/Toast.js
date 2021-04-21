import React, { Component } from "react";

// color can be supplied as <Toast 
class Toast extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{color:this.props.color}} className={`toast`}>{this.props.text}</div>
      </div>
    );
  }
}
export default Toast;