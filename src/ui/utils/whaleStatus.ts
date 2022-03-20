export const whaleStatus = (whaleStart: number, whaleEnd: number) => {
	if (whaleEnd > whaleStart) {
		// Pumper
		return 1
	} else if (whaleEnd < whaleStart) {
		// Dumper
		return -1
	} else {
		// Holding
		return 0
	}
}