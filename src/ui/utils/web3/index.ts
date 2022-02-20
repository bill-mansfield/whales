
import Web3 from 'web3'
// @ts-ignore
import EthDater from 'ethereum-block-by-date'
import moment from 'moment'

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

export const getBalancesFromTime = async (wallets: string[]) => {

	const dater = new EthDater(web3)

	//Get block form 6 months ago
	let block = await dater.getDate(moment().subtract(6, 'months'),true)
	console.log('blok', block.block)

	//Can only get the most previous 128 blocks with free infura

	// Pivot app to show change in wallet amount in the most previous 128 blocks
	// Post on twitter when a trend is occuring in the most previous 128 blocks
	console.log('bal', await web3.eth.getBalance('0x00000000219ab540356cbb839cbe05303d7705fa', 13060497))

}