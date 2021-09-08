import React, { Component } from "react";
import Opcion from "./Opcion";

export default class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
        <Opcion
        id="A" 
        handleClick={this.props.handleClick}
        opcion={this.props.opcion.a}
        />
        <Opcion 
        id="B" 
        handleClick={this.props.handleClick}
        opcion={this.props.opcion.b}
        />
      </div>
    );
  }
}