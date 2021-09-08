import React, { Component } from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "./data";

const registro = [];

export default class Juego extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      opcionAnterior: "",
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      registro.push(this.state.opcionAnterior);
    }
  }

  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.contador >= 7) {
      alert("Fin.");
    } else if (id === "A" && this.state.opcionAnterior !== "A") {
      this.setState({
        contador: this.state.contador + 1,
        opcionAnterior: "A",
      });
    } else if (id === "A" && this.state.opcionAnterior === "A") {
      this.setState({
        contador: this.state.contador + 2,
      });
    } else if (id === "B" && this.state.opcionAnterior === "A") {
      this.setState({
        contador: this.state.contador + 3,
        opcionAnterior: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        opcionAnterior: "B",
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones
          handleClick={this.handleClick}
          opcion={data[this.state.contador].opciones}
        />
        <Recordatorio
          opcionAnterior={this.state.opcionAnterior}
          registro={registro.map(
            (el, i) => (
              <li key={i}>{el}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </div>
    );
  }
}