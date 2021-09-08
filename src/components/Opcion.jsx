import React, { Component } from "react";

export default class Opcion extends Component {
  render() {
    return (
        <div className="opcion">
          <button id={this.props.id} className="botones" onClick={this.props.handleClick}>{this.props.id}</button>
          <h2>{this.props.opcion}</h2>
        </div>
    );
  }
}