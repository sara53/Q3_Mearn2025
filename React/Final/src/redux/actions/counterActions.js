export function increaseAction(payload) {
	// create Action //
	return {
		type: "INCREASE",
		payload,
	};
}
