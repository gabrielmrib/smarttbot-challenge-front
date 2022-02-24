import React from "react"
import "./SummaryOperations.css"

class SummaryOperations extends React.Component {
  render() {
    return (
      <div className="summary-container">
        <div className="summary-summary">Resumo geral de Operações</div>
        <span className="summary-container2">
          <div className="summary-bloco">
            <span className="summary-fonte">Resumo de movimentação</span>
            <span className="summary-movimentação-valor">R$ -220,00</span>
          </div>
          <div className="summary-bloco">
            <span className="summary-fonte">
              Total de transações Realizadas
            </span>
            <span className="summary-transaçõesRealizadas-valor">443</span>
          </div>
        </span>
        <hr className="summary-linha" />
        <div className="summary-fonte">Papéis negociados</div>
        <span className="summary-container2">
          <span className=" summary-paper-list">
            <span className="summary-linhaId">
              <span className="summary-id">WinG20</span>
              <span className="summary-pontilhado" />
              <span className="summary-numTransações">
                157 <span className="summary-fonte">transações</span>
              </span>
            </span>
            <span className="summary-linhaId ">
              <span className="summary-id">WinG20</span>
              <span className="summary-pontilhado" />
              <span className="summary-numTransações">
                157 <span className="summary-fonte">transações</span>
              </span>
            </span>{" "}
            <span className="summary-linhaId ">
              <span className="summary-id">WinG20</span>
              <span className="summary-pontilhado" />
              <span className="summary-numTransações">
                157 <span className="summary-fonte">transações</span>
              </span>
            </span>
            <span className="summary-linhaId ">
              <span className="summary-id">WinG20</span>
              <span className="summary-pontilhado" />
              <span className="summary-numTransações">
                157 <span className="summary-fonte">transações</span>
              </span>
            </span>
            <span className="summary-linhaId ">
              <span className="summary-id">WinG20</span>
              <span className="summary-pontilhado" />
              <span className="summary-numTransações">
                157 <span className="summary-fonte">transações</span>
              </span>
            </span>
            <span className="summary-linhaId ">
              <span className="summary-id">WinG20</span>
              <span className="summary-pontilhado" />
              <span className="summary-numTransações">
                157 <span className="summary-fonte">transações</span>
              </span>
            </span>
          </span>
        </span>
      </div>
    );
  }
}

export default SummaryOperations
