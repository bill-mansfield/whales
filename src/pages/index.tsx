import { FC } from 'react'
import AppLayout from '@app/ui/layouts/App'
import { PageContent } from '@app/ui/components/PageContent'
import { PageWrapper } from '@app/ui/components/PageWrapper'
import pxToRem from '@app/ui/utils/pxToRem';
import styled from 'styled-components';
import { getManyBalances, getBalancesFromTime } from '@app/ui/utils/web3'

type IndexPageProps = {

}

const top5Wallets = [
 '0x00000000219ab540356cbb839cbe05303d7705fa',
 '0x73bceb1cd57c711feac4224d062b0f6ff338501e',
 '0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5',
 '0xdc24316b9ae028f1497c275eb9192a3ea0f67022',
 '0x011b6e24ffb0b5f5fcc564cf4183c5bbbc96d515'
]

const top5Balances = await getManyBalances(top5Wallets)
console.log('index', await getBalancesFromTime())

export const IndexPage: FC<IndexPageProps> = ({}) => {
  return (
    <AppLayout>
      <PageContent>
        <PageWrapper>
          <h1>DORP</h1>
          <hr />
          <BalanceWrapper>
            {top5Balances?.map((balance: string, i: number) => (
              <BalanceRow key={i + 1}>
                <h2>Wallet No. {i + 1}: {balance}</h2>
              </BalanceRow>
            ))}
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