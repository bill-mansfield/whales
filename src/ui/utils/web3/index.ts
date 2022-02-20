
import Web3 from 'web3'

const rpcURL = 'https://mainnet.infura.io/v3/' + process.env.NEXT_PUBLIC_INFURA_API_KEY
const web3 = new Web3(rpcURL)


export const getBalance = async (address: string) => {
  const bal = web3.eth.getBalance(address)
  return web3.utils.fromWei(await bal, 'ether').slice(0, 10)
}

export const getManyBalances = async (wallets: string[]) => {
  return Promise.all(wallets.map(async (wallet: string) => {
    return getBalance(wallet);
  }));
}