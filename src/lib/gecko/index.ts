import { callApi } from '@app/ui/utils/callApi'

export const ethGecko = 'https://api.coingecko.com/api/v3/coins/ethereum/'
export const simpleEthGecko = 'https://api.coingecko.com/api/v3/simple/'

export const fetchChartData = async () => {
	type coinGeckoSort = {
		index: any
		price: any
		volumes: any
	}

	let data: coinGeckoSort = { index: [], price: [], volumes: [] };
	let result = await callApi(ethGecko + 'market_chart?vs_currency=usd&days=1&interval=1m')

	result.prices.map((item: any ) => {
		data.index.push(item[0])
		data.price.push(item[1])
	})
	result.total_volumes.map((item: any ) => {
		data.volumes.push(item[1])
	})
	return data
}

export const fetchHistoicalPrice = async (date: string) => {
	return await callApi(ethGecko + 'history?date=' + date + '&vs_currency=usd')
}

export const fetchCurrentPrice = async () => {
	return await callApi(simpleEthGecko + 'price?ids=ethereum&vs_currencies=usd')
}