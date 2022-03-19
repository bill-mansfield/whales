export const deltaPrice = (startingPrice?: number, endingPrice?: number) => {
	if (startingPrice && endingPrice) {
		return Math.floor((endingPrice - startingPrice)/startingPrice * 100)
	}
}