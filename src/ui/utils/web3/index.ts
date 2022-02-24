
import Web3 from 'web3'

const rpcURL = 'https://mainnet.infura.io/v3/' + process.env.NEXT_PUBLIC_INFURA_API_KEY
const web3 = new Web3(rpcURL)

export const latestBlock = await web3.eth.getBlockNumber()
export const blockTime = [
	latestBlock,
	latestBlock - 120,
	latestBlock - 80,
	latestBlock - 40, 
	latestBlock - 20,
	latestBlock - 10,
	latestBlock - 5,
	latestBlock - 1
]

export const getBalance = async (address: string, reqBlock?: number) => {
	let bal
	if (reqBlock) {
		bal = await web3.eth.getBalance(address, reqBlock)
	} else {
		bal = web3.eth.getBalance(address)
	}
  return web3.utils.fromWei(await bal, 'ether').slice(0, 10)
}

export const getBalancesOverTime = async (wallet: string) => {
	const [a, b, c, d, e, f, g, h] = await Promise.all(
		blockTime.map(async (time: number) => {
			return await getBalance(wallet, time)
	}))

	return [a, b, c, d, e, f, g, h]
}