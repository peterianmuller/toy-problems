possibleWinners = (b, c, e, f) => {
	let winners = [],
		round1Results = {
			bracket1: {},
			bracket2: {}
		};

	// check if either of the two semi-final games will be a tie.
	// if so return []
	if (b === f || c === e) {
		return [];
	}

	// figure out the winners of the first rounds

	if (b > f) {
		round1Results.bracket1.team = 'Belgium';
		round1Results.bracket1.goalsLeftOver = b - f - 1;
	} else {
		round1Results.bracket1.team = 'France';
		round1Results.bracket1.goalsLeftOver = f - b - 1;
	}

	if (e > c) {
		round1Results.bracket2.team = 'England';
		round1Results.bracket2.goalsLeftOver = e - c - 1;
	} else {
		round1Results.bracket2.team = 'Croatia';
		round1Results.bracket2.goalsLeftOver = c - e - 1;
	}

	// figure out combinations of winners

	if (!round1Results.bracket1.goalsLeftOver && !round1Results.bracket2.goalsLeftOver) {
		return [];
	}

	return [];
};

module.exports = possibleWinners;
