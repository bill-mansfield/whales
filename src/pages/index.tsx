import { FC } from 'react'
import Web3 from 'web3'
import AppLayout from '@app/ui/layouts/App'
import { PageContent } from '@app/ui/components/PageContent'
import { PageWrapper } from '@app/ui/components/PageWrapper'


type IndexPageProps = {

}

const rpcURL = 'https://mainnet.infura.io/v3/' + process.env.NEXT_PUBLIC_INFURA_API_KEY
const web3 = new Web3(rpcURL)
const address = process.env.NEXT_PUBLIC_ADDRESS as string

const getBalance = async (address: string) => {
  return await web3.eth.getBalance(address, (err, wei) => {
    web3.utils.fromWei(wei, 'ether')
  })
}

const balance = await getBalance(address)

export const IndexPage: FC<IndexPageProps> = ({}) => {
  return (
    <AppLayout>
      <PageContent>
        <PageWrapper>
          <h1>DORP</h1>
          <hr />
          <h2>Your balance: {balance}</h2>
          <h3> this is a h3</h3>
          <h5> this is a h5</h5>
          <p>this is a p</p>
          <code>Your balance: {balance}</code>
          <h4>This is a h4</h4>
        </PageWrapper>
      </PageContent>
    </AppLayout>
  )
}


export default IndexPage
