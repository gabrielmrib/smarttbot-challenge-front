import React from "react";
import "./RoboDetailCard.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../commons/globalStyles";
import MonetaryValue from "../commons/MonetaryValueShow";

export interface IRobots {
    title?: string
    id?: number
    mode?: number
    'stock_codes'?: string
    type?: string
    'daily_balance'?: number
    strategy?: string
    'last_paper_paper'?: string
    'last_paper_paper_value'?: number
    'last_paper_position'?: number
    'last_paper_profit'?: number
    'last_paper_type'?: number
    'number_trades'?: number
  }

class RobotDetailCard extends React.Component<IRobots> {
   
  render() {
    return (
      <div className="robot-robotCard">
        <div className="robot-firstColum">
          <span className="robot-title">{this.props.title}</span>
          <span className="robot-font">
            {" "}
            <StoppedOrExecuting mode={this.props.mode} />
          </span>
        </div>
        <div className="robot-id">#{this.props.id ?? "ID não encontrado"}</div>
        <div className="robot-ativos">
          <span className="robot-box-ativos">
            {this.props.mode ? "Pessimista" : "Otimista"}
          </span>
          <span className="robot-box-ativos">{this.props.stock_codes ?? "Não encontrado"}</span>
          <span className="robot-box-ativos">{this.props.strategy ?? "Não encontrado"}</span>
        </div>

        <div className="robot-container">
          <span className="robot-box1">{this.props.last_paper_position ?? "00"}</span>
          <div>
            <span className="robot-box2">{this.props.last_paper_paper ?? "NULL00"}</span>
            <div className="robot-box3">
              {this.props.last_paper_type ? "Venda" : "Compra"}
            </div>
          </div>
          <div className="robot-z">
            <span className="robot-box4">
              {this.props.last_paper_paper_value ?? "000.000.00"}
            </span>

            <div className="robot-box5">
              <PaperProfit monetaryValue={this.props.last_paper_profit ?? 0} />
            </div>
          </div>
        </div>
        <span className="robot-saldo-negocições">
          <span>
            <div className="robot-font">
              Saldo diário{" "}
              <KeyboardArrowDownIcon sx={{ verticalAlign: "top" }} />
            </div>
            <div className="robot-saldoValor">
              <MonetaryValue value={this.props.daily_balance ?? 0} />
            </div>
          </span>
          <span className="robot-alinharDireita">
            <div className="robot-font">Negociações no dia</div>
            <div className="robot-tradeDia">{this.props.number_trades ?? 0}</div>
          </span>
        </span>
      </div>
    );
  }
}

function StoppedOrExecuting({ mode = 1 }: { mode?: number }) {
  if (mode == 0) {
    return (
      <>
        <FiberManualRecordIcon
          sx={{
            fontSize: 14,
            color: styles.colorPositive,
            verticalAlign: "text-top",
          }}
        />{" "}
        Em execução
      </>
    );
  } else {
    return (
      <>
        <FiberManualRecordIcon
          sx={{
            fontSize: 14,
            color: styles.colorPositive,
            verticalAlign: "text-top",
          }}
        />{" "}
        Parado
      </>
    )
  }
}

function PaperProfit({ monetaryValue = 0 }: { monetaryValue?: number }) {
  if (monetaryValue >= 0)
    return (
      <span className="robot-box5" color={styles.colorPositive}>
        <ArrowDropUpIcon sx={{ verticalAlign: "baseline" }} />
        R${monetaryValue?.toLocaleString("pt-BR")}
      </span>
    )

  return (
    <span className="robot-box5" color={styles.colorNegative}>
      <ArrowDropDownIcon sx={{ verticalAlign: "baseline" }} /> R$
      {Math.abs(monetaryValue).toLocaleString("pt-BR")}
    </span>
  )
}

export default RobotDetailCard;
