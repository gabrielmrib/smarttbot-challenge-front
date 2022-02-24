import React from "react"
import "./AddRobotModal.css"
interface IAddRobotsModalData {
  onClose: () => void
  id: string
}

class AddRobotModal extends React.Component<IAddRobotsModalData> {
  handleCloseClick = (e) => {
    if (e.target.id === this.props.id) this.props.onClose()
  }
  render() {
    return (
      <div role="dialog" className="background">
        <div className="modal-container">
          <div className="modal-between modal-font1">
            Adicionar um robo{" "}
            <span
              className="pointer"
              id={this.props.id}
              onClick={this.handleCloseClick}
            >
              X
            </span>
          </div>
          <br />
          <div className="modal-font2">Vamos criar seu robô</div>
          <div className="modal-font3">Preencha as informações a baixo:</div>
          <br />
          <form>
            <div className="modal-font4">Nome do produto</div>
            <input
              type="text"
              className="input1"
              placeholder="   Nome do prouto"
            />
            <div className="modal-font4">Captal Inicial do robô</div>
            <input type="" className="input1" placeholder="   R$" />
            <br />
            <span className="modal-font1">
              Selecione uma das estratégias a baixo
            </span>
            <div className="form-group" role="dialog" arial-model="true">
              <button value={1}>Raptor</button>
              <button value={2}>Tamgram</button>
              <button value={3}>Hórus</button>
              <button value={4}>Pontos Pivot</button>
              <button value={5}>Orion</button>
              <button value={6}>Futuro</button>
              <button value={7}>Gauss Contro</button>
            </div>
            <div className="modal-between">
              <span
                id={this.props.id}
                onClick={this.handleCloseClick}
                className="cancel"
              >
                Cancelar
              </span>
              <span className="create">Criar Robô</span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default AddRobotModal
