import { FC, useState } from 'react'
import AppLayout from '@app/ui/layouts/App'
import { PageContent } from '@app/ui/components/PageContent'
import { PageWrapper } from '@app/ui/components/PageWrapper'
import pxToRem from '@app/ui/utils/pxToRem';
import styled from 'styled-components';
import { getBalancesOverTime, averageBlockTime } from '@app/ui/utils/web3'
import moment from 'moment'

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

  // Infura free plan rate limit hit (no surprise)
  // TODO: implement caching

  const initAvaerageBlockTime = async () => {
    return await typeof averageBlockTime === 'number' ? averageBlockTime : 10
  }
  initAvaerageBlockTime().then(res => {
    setAverageBlockTime(res)
  })

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
          <BalanceWrapper>
            <table>
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
                {data ? data?.map((period: any, i: number) => (
                  <tr key={i}>
                    <td>0x011b6e24ffb0b5f5fcc564cf4183c5bbbc96d515</td>
                    <td>{period[0]}</td>
                    <td>{period[1]}</td>
                    <td>{period[2]}</td>
                    <td>{period[3]}</td>
                    <td>{period[4]}</td>
                    <td>{period[5]}</td>
                    <td>{period[6]}</td>
                    <td>{period[7]}</td>
                  </tr>
                ))
              : ''}
              </tbody>
            </table>
          </BalanceWrapper>
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

const BalanceRow = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: ${pxToRem(20)};
`