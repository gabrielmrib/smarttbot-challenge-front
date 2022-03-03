import axios from "axios"

export interface IRobotsAPI {
  title?: string
  id?: number
  mode?: number
  stock_codes?: string
  type?: string
  daily_balance?: number
  strategy?: string
  last_paper?: {
    id?: number
    paper?: string
    paper_value?: number
    position?: number
    profit?: number
    type?: number
  }
  number_trades?: number
  movimentations?: {
    date?: string
    value?: number
  }[]
}

export interface IResponseSB {
  data: IRobotsAPI[]
}

export const client = axios.create({
  baseURL: "https://api-front-test.k8s.smarttbot.com/api/v1",
})

/**
 * Get Summary Transaction
 * @param robots Robot list from API 
 * @returns A Map, with key value where key is paper and value is total transactions
 */
export function getSummaryTransactions(
  robots: IRobotsAPI[]
): Map<string, number> {
  let papersMap = new Map<string, number>()
  robots.map((robot) => {
    if (robot.stock_codes) {
      if (papersMap.has(robot.stock_codes))
        papersMap.set(
          robot.stock_codes,
          (papersMap.get(robot.stock_codes) ?? 0) +
            (robot.movimentations?.length ?? 0)
        )
      else papersMap.set(robot.stock_codes, 0)
    }
  })
  return papersMap
}

/**
 * Get Movimentations Balance
 * @param robots Robots from API
 * @returns Movimentation balance
 */
export function getMovimentationsBalance(robots: IRobotsAPI[]): number {
  let total = 0
  for (const robot of robots) {
    const value = robot.movimentations?.reduce((accumulator, current) => {
      return accumulator + (current.value ?? 0)
    }, 0)

    total += value ?? 0
  }
  return total
}

/**
 * Get total transactions
 * @param papers A Map from getSummaryTransaction function
 * @returns total of transactions
 */
export function getTotalTransactions(papers: Map<string, number>): number {
  let totalTransactions = 0
  for (const value of papers.values()) {
    totalTransactions += value
  }
  return totalTransactions
}
