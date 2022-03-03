import React, { useState } from "react"
import { client } from "../../api/RobotAPI"
import { IStrategy } from "../../api/StrategyAPI"
import "./AddRobotModal.css"

type INewRobotData = {
  productName?: string
  initialCapital?: number
  strategyId?: number
}

interface IAddRobotsModalData {
  onClose: () => void
  strategies: IStrategy[]
}

class AddRobotModal extends React.Component<
  IAddRobotsModalData,
  INewRobotData
> {
  constructor(props: IAddRobotsModalData) {
    super(props)
    this.state = {
      productName: "",
      initialCapital: 0,
      strategyId: 0,
    }
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const payload = {
      title: this.state.productName,
      mode: 0,
      strategy_id: this.state.strategyId,
      initial_capital: this.state.initialCapital,
      simulation: 0,
      broker_id: 1,
    }
    client
      .post("/robot", payload)
      .catch((e) => alert("Erro ao cadastrar robo\nErro:" + e))
  }

  handleClickStrategy = (event: any) => {
    this.setState({ strategyId: event.target.value })
  }

  handleFormChange = (event: any) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div role="dialog" className="background">
        <div className="modal-container">
          <div className="modal-between modal-font1">
            Adicionar um robo{" "}
            <span className="pointer" onClick={this.props.onClose}>
              X
            </span>
          </div>
          <br />
          <div className="modal-font2">Vamos criar seu robô</div>
          <div className="modal-font3">Preencha as informações a baixo:</div>
          <br />
          <form onSubmit={this.handleSubmit}>
            <label className="modal-font4" htmlFor="">
              Nome do produto
              <input
                type="text"
                name="productName"
                className="input1"
                placeholder="   Nome do prouto"
                onChange={this.handleFormChange}
                value={this.state.productName}
              />
            </label>
            <div className="modal-font4">Captal Inicial do robô</div>
            <input
              name="initialCapital"
              type="number"
              min="1"
              step="any"
              className="input1"
              value={this.state.initialCapital}
              onChange={this.handleFormChange}
              placeholder="   R$"
            />
            <br />
            <span className="modal-font1">
              Selecione uma das estratégias a baixo
            </span>
            <div className="form-group" role="dialog" arial-model="true">
              {this.props.strategies.map((strategy) => {
                return (
                  <button
                    key={strategy.id.toString()}
                    onClick={this.handleClickStrategy}
                    type="button"
                    value={strategy.id.toString()}
                  >
                    {strategy.name}
                  </button>
                )
              })}
            </div>
            <div className="modal-between">
              <span onClick={this.props.onClose} className="cancel">
                Cancelar
              </span>
              <input type="submit" className="create" value="Criar Robô" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default AddRobotModal
