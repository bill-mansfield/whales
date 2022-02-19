import { FC } from 'react'
import Web3 from 'web3'

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
    <div>
      <div>
        <h1>DORP</h1>
        <hr />
        <h2>Your balance: {balance}</h2>
      </div>
    </div>
  )
}


export default IndexPage
