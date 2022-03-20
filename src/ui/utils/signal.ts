enum Signal {
	Pump = 'Pump',
	Dump = 'Dump',
	Accumulate = 'Accumulate',
	Panic = 'Panic',
	Split = 'Split',
	Flat = 'Flat',
}

export const signal = (whaleChi: number, deltaPrice: number) => {
	console.log(whaleChi, deltaPrice);
	if (deltaPrice > 0 && whaleChi > 0) {
		// Market is up and whales are buying
		return Signal.Pump
	} else if (deltaPrice > 0 && whaleChi < 0) {
		// Market is up and whales are selling
		return Signal.Dump
	} else if (deltaPrice < 0 && whaleChi > 0) {
		// Market is down and whales are buying
		return Signal.Accumulate
	} else if (deltaPrice < 0 && whaleChi < 0) {
		// Market is down and whales are selling
		return Signal.Panic
	} else if (whaleChi === 0) {
		// Whales are split
		return Signal.Split
	} else {
		// Market is flat
		return Signal.Flat
	}
}