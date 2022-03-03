import { useEffect, useState } from "react"
import "./App.css"
import SummaryOperations from "./components/SummaryOperations/SummaryOperations"
import Top from "./components/Top/Top"
import RobotDetailCard from "./components/RobotDetailCard/RobotDetailCard"
import AddRobot from "./components/AddRobot/AddRobot"
import {
  client,
  getMovimentationsBalance,
  getSummaryTransactions,
  getTotalTransactions,
  IResponseSB,
  IRobotsAPI,
} from "./api/RobotAPI"
import AddRobotModal from "./components/AddRobotModal/AddRobotModal"
import { IStrategyList, IStrategy } from "./api/StrategyAPI"

function App() {
  const [isVisible, setVisible] = useState(false)
  const defaultRobots: IRobotsAPI[] = []
  const [robotList, setRobotList]: [
    IRobotsAPI[],
    (robots: IRobotsAPI[]) => void
  ] = useState(defaultRobots)
  const [paperSummary, setPaperSummary] = useState(new Map<string, number>())
  const [movimentationsBalance, setMovimentationsBalance] = useState(0)
  const [totalTransactions, setTotalTransactions] = useState(0)
  const defaultStrategiesList: IStrategy[] = []
  const [strategiesList, setStrategiesList]: [
    IStrategy[],
    (strategy: IStrategy[]) => void
  ] = useState(defaultStrategiesList)

  useEffect(() => {
    client.get<IResponseSB>("/robot").then((response) => {
      setRobotList(response.data.data)

      const papers = getSummaryTransactions(response.data.data)
      setMovimentationsBalance(getMovimentationsBalance(response.data.data))
      setTotalTransactions(getTotalTransactions(papers))
      setPaperSummary(papers)
    })

    client.get<IStrategyList>("/strategy").then((response) => {
      setStrategiesList(response.data.data)
    })
  }, [])

  return (
    <div className="app-backgroun">
      <div className={`AppBox ${isVisible ? "fixedPosition" : ""}`}>
        <header>
          <Top />
        </header>
        <section>
          <SummaryOperations
            movimentationsBalance={movimentationsBalance}
            totalTransactions={totalTransactions}
            papers={paperSummary}
          />
        </section>
        <section
          onClick={() => {
            setVisible(true)
          }}
        >
          <AddRobot />
        </section>
        <div className="stack">
          {robotList.map((robot) => {
            return (
              <RobotDetailCard
                key={robot.id?.toString()}
                id={robot.id}
                title={robot.title}
                mode={robot.mode}
                strategy={robot.strategy}
                stock_codes={robot.stock_codes}
                daily_balance={robot.daily_balance}
                type={robot.type}
                last_paper_paper={robot.last_paper?.paper}
                last_paper_paper_value={robot.last_paper?.paper_value}
                last_paper_position={robot.last_paper?.position}
                last_paper_profit={robot.last_paper?.profit}
                last_paper_type={robot.last_paper?.type}
                number_trades={robot.number_trades}
              />
            )
          })}
        </div>
      </div>
      <div className={isVisible ? "show" : "invisible"}>
        <AddRobotModal
          strategies={strategiesList}
          onClose={() => setVisible(false)}
        />
      </div>
    </div>
  )
}

export default App
