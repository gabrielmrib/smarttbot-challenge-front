import React from "react"
import "./AddRobot.css"

class AddRobot extends React.Component {
  render() {
    return (
      <div className="add-container">
        <span className="add-centralizar">
          <div className="add-box">
            <img className=" add-box" src="" alt="logo" />
          </div>
          <div>
            <span className="add-add">Adicionar Novo Robô</span>
            <div className="add-robot">
              Você possui <span>02 Robôs </span>disponíveis
            </div>
          </div>
        </span>
      </div>
    )
  }
}

export default AddRobot
