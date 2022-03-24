import React from "react"
import "./RoboDetailCard.css"

class RobotDetailCard extends React.Component {
  render() {
    return (
      <div className="robot-robotCard">
        <div className="robot-firstColum">
          <span className="robot-title">Título do Robo</span>
          <span className="robot-font">• Em execução</span>
        </div>
        <div className="robot-id">#1549848</div>
        <div className="robot-ativos">
          <span className="robot-box-ativos">Pessimista</span>
          <span className="robot-box-ativos">WIN%</span>
          <span className="robot-box-ativos">Price Action</span>
        </div>
        <div className=" robot-container">
          <span className="robot-box1">30</span>
          <div className="">
            <span className="robot-box2">WING20</span>
            <div className="robot-box3">Compra</div>
          </div>
          <div>
            <span className="robot-box4">117.093.33</span>
            <div className="robot-box5">▴R$92,33</div>
          </div>
        </div>
        <span className="robot-saldo-negocições">
          <span>
            <div className="robot-font">Saldo diário</div>
            <div className="robot-saldoValor">-R$220,00</div>
          </span>
          <span className="robot-alinharDireita">
            <div className="robot-font">Negociações no dia</div>
            <div className="robot-tradeDia">7</div>
          </span>
        </span>
      </div>
    )
  }
}

export default RobotDetailCard;
