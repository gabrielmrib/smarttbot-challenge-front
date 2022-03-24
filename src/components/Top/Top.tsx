import React from "react";
import "./Top.css";
import SignalCellularAltSharpIcon from "@mui/icons-material/SignalCellularAltSharp";

class Top extends React.Component {
  render() {
    return (
      <div className="top-container">
        <p>
          <SignalCellularAltSharpIcon className="top-icon" />
          <span className="top-vertical" />
          <span className="top-analise">Análise Geral</span>
          <span className="top-barra"> / </span>
          <span className="top-principal">Principal</span>
        </p>
      </div>
    );
  }
}

export default Top;
