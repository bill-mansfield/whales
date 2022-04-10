export enum Signal {
	Pump = 'Pump',
	Dump = 'Dump',
	Accumulate = 'Accumulate',
	Panic = 'Panic',
	Split = 'Split',
	Flat = 'Flat',
}

export const signal = (whaleChi: number, deltaPrice: number) => {
	let signalObj = {
		brief: '',
		signal: ''
	}

	if (deltaPrice > 0 && whaleChi > 0) {
		signalObj.brief = 'Market is up and whales are buying'
		signalObj.signal = Signal.Pump
		return signalObj
	} else if (deltaPrice > 0 && whaleChi < 0) {
		signalObj.brief = 'Market is up and whales are selling'
		signalObj.signal = Signal.Dump
		return signalObj
	} else if (deltaPrice < 0 && whaleChi > 0) {
		signalObj.brief = 'Market is down and whales are buying'
		signalObj.signal = Signal.Accumulate
		return signalObj
	} else if (deltaPrice < 0 && whaleChi < 0) {
		signalObj.brief = 'Market is down and whales are selling'
		signalObj.signal = Signal.Panic
		return signalObj
	} else if (deltaPrice < 0 && whaleChi === 0) {
		signalObj.brief = 'Market is down and whales are split'
		signalObj.signal = Signal.Split
		return signalObj
	} else if (deltaPrice > 0 && whaleChi === 0) {
		signalObj.brief = 'Market is up and whales are split'
		signalObj.signal = Signal.Split
		return signalObj
	} else {
		signalObj.brief = 'Market is flat??'
		signalObj.signal = Signal.Split
		return signalObj
	}
}