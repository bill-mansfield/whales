import { FC, useState, useEffect } from 'react'
import AppLayout from '@app/ui/layouts/App'
import { PageContent } from '@app/ui/components/PageContent'
import { PageWrapper } from '@app/ui/components/PageWrapper'
import pxToRem from '@app/ui/utils/pxToRem';
import styled from 'styled-components';
import { getBalancesOverTime, averageBlockTime } from '@app/lib/web3'
import moment from 'moment'
import TableCell from '@app/ui/components/TableCell'
import WalletCell from '@app/ui/components/WalletCell'
import EthChart from '@app/ui/components/EthChart'
import { fetchChartData, fetchHistoicalPrice, fetchCurrentPrice } from '@app/lib/gecko'
import { deltaPrice } from '@app/ui/utils/deltaPrice'
import { whaleStatus } from '@app/ui/utils/whaleStatus'
import { signal } from '@app/ui/utils/signal'

type wallet = {
  [key: string]: number
}


const top5Wallets = [
 '0x00000000219ab540356cbb839cbe05303d7705fa',
 '0x73bceb1cd57c711feac4224d062b0f6ff338501e',
 '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
 '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
 '0x011b6e24ffb0b5f5fcc564cf4183c5bbbc96d515'
]

export const IndexPage: FC = () => {

	const [tableData, setTableData] = useState<string[][]>()
  const [averageBlockTime, setAverageBlockTime] = useState<number>()
  const [ethChartData, setEthChartData] = useState<any>()
  const [twentyFourHourPrice, setTwentyFourHourPrice] = useState<number>()
  const [currentPrice, setCurrentPrice] = useState<number>()
  const [marketTrend, setMarketTrend] = useState<number>()
  let whaleChi:number = 0

  // const initTableData = async () => {
  //   const [first, second, third, fourth, fifth] = await Promise.all(
  //     top5Wallets.map(async (wallet: string) => {
  //       return await getBalancesOverTime(wallet)
  //     })
  //   )

  //   return [first, second, third, fourth, fifth ]
  // }
  // initTableData().then(res => {
  //   setTableData(res)
  // })


  const initAvaerageBlockTime = async () => {
    return await typeof averageBlockTime === 'number' ? averageBlockTime : 10
  }

  initAvaerageBlockTime().then(res => {
    setAverageBlockTime(res)
  })

  useEffect(() => {
    fetchChartData().then((res) => {
      setEthChartData(res)
    })
    fetchHistoicalPrice(moment.utc().subtract(1,"day").format("DD-MM-YYYY")).then((res) => {
      setTwentyFourHourPrice(res?.market_data?.current_price?.usd)
    })
    fetchCurrentPrice().then((res) => {
      setCurrentPrice(res.ethereum.usd)
    })
    setMarketTrend(deltaPrice(twentyFourHourPrice, currentPrice))
  }, [])

  const data = ([
    [
      '9579042.00',
      '9579042.00',
      '9579042.00',
      '9579042.00',
      '9579042.00',
      '9579042.00',
      '9579042.00',
      '9579042.00'
    ],
    [
      '2003504.57',
      '2003504.57',
      '2003504.57',
      '2003504.57',
      '2003504.57',
      '2003504.57',
      '2003504.57',
      '2003504.57'
    ],
    [
      '994999.491',
      '994834.492',
      '994829.492',
      '994824.492',
      '994824.492',
      '994824.492',
      '995024.492',
      '994999.491'
    ],
    [
      '575220.379',
      '575250.564',
      '575267.626',
      '575363.856',
      '575323.296',
      '575220.379',
      '575220.379',
      '575220.379'
    ],
    [
      '569354.336',
      '569337.925',
      '569308.775',
      '569309.518',
      '569312.001',
      '569356.536',
      '569353.586',
      '569354.336'
    ]
  ])

  return (
    <AppLayout>
      <PageContent>
        <PageWrapper>
          <h1>The DORP Index</h1>
          <hr />
          <p>Whale transactions vs price trend * Whale alignment</p>
          <p>&sigma; * 	&chi; = Dorp index</p>
          <BalanceWrapper>
            <Table>
              <thead>
                <tr>
                  <th>Wallet</th>
                  <th>Current</th>
                  <th>{Math.round(averageBlockTime ? 120 * averageBlockTime / 60 : 0)} Hours ago</th>
                  <th>{Math.round(averageBlockTime ? 80 * averageBlockTime / 60 : 0)} Hours ago</th>
                  <th>{Math.round(averageBlockTime ? 40 * averageBlockTime / 60 : 0)} Hours ago</th>
                  <th>{Math.round(averageBlockTime ? 20 * averageBlockTime / 60 : 0)} Hours ago</th>
                  <th>{Math.round(averageBlockTime ? 10 * averageBlockTime / 60 : 0)} Hours ago</th>
                  <th>{Math.round(averageBlockTime ? 5 * averageBlockTime / 60 : 0)} Hour ago</th>
                  <th>{Math.round(averageBlockTime ? 1 * averageBlockTime : 0)} minutes ago</th>
                </tr>
              </thead>
              <tbody>
                {data ? data?.map((period: any, i: number) => {
                  whaleChi += whaleStatus(period[1], period[0])
                  return (
                    <tr key={i}>
                      <WalletCell TwentyHoursAgo={period[1]} CurrentValue={period[0]} Wallet={top5Wallets[i]} />
                      <TableCell CellValue={period[0]} PreviousCellValue={period[1]} />
                      <TableCell CellValue={period[1]} PreviousCellValue={period[1]} />
                      <TableCell CellValue={period[2]} PreviousCellValue={period[1]} />
                      <TableCell CellValue={period[3]} PreviousCellValue={period[2]} />
                      <TableCell CellValue={period[4]} PreviousCellValue={period[3]} />
                      <TableCell CellValue={period[5]} PreviousCellValue={period[4]} />
                      <TableCell CellValue={period[6]} PreviousCellValue={period[5]} />
                      <TableCell CellValue={period[7]} PreviousCellValue={period[6]} />
                    </tr>
                  )
                }) : ''}
              </tbody>
            </Table>
          </BalanceWrapper>
          <p>Whale Chi: {whaleChi}</p>
          <p>Current 24hr trend: {marketTrend}%</p>
          <p>Current signal: {signal(whaleChi, marketTrend as number)}</p>
          <EthChart twentyFourHourPrice={twentyFourHourPrice} data={ethChartData} />
        </PageWrapper>
      </PageContent>
    </AppLayout>
  )
}


export default IndexPage

const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(20)};
`
const Table = styled.table`
  display: block;
  overflow-x: auto;
`