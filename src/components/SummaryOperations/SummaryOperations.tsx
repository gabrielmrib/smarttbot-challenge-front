import React from "react";
import MonetaryValue from "../commons/MonetaryValueShow";
import "./SummaryOperations.css";

interface ISummaryPaper {
  paper: string;
  transactions: number;
}

interface ISummary {
  movimentationsBalance: number;
  totalTransactions: number;
  papers: Map<string, number>;
}

class SummaryOperations extends React.Component<ISummary> {
  render() {
    return (
      <div className="summary-container">
        <div className="summary-summary">Resumo geral de Operações</div>
        <span className="summary-container2">
          <div className="summary-bloco">
            <span className="summary-fonte">Resumo de movimentação</span>
            <span className="summary-movimentação-valor">
              <MonetaryValue value={this.props.movimentationsBalance} />
            </span>
          </div>
          <div className="summary-bloco">
            <span className="summary-fonte">Total de transações Realizadas</span>
            <span className="summary-transaçõesRealizadas-valor">
              {this.props.totalTransactions ?? "00"}
            </span>
          </div>
        </span>
        <hr className="summary-linha" />
        <div className="summary-fonte">Papéis negociados</div>
        <span className="summary-paper-list ">
          {/* <span className="summary-bloco "> */}
            {[...this.props.papers].map((element) => (
              <PaperTransactions
                key={element[0]}
                paper={element[0]}
                transactions={element[1]}
              />
            ))}
          {/* </span> */}
        </span>
      </div>
    );
  }
}

function PaperTransactions({ paper, transactions }: ISummaryPaper) {
  return (
    <span className="summary-linhaId">
      <span className="summary-id">{paper}</span>
      <span className="summary-pontilhado"></span>
      <span className=" summary-numTransações">
        {transactions} <span className="summary-fonte summary-transitionsPadding">transações</span>
      </span>
       
    </span>
  );
}

export default SummaryOperations;

