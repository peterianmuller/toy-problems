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

	round1 = (bracketNumber, teamName1, teamName2, team1Goals, team2Goals) => {
		if (team1Goals > team2Goals) {
			round1Results[`bracket${bracketNumber}`].goalsLeftOver = team1Goals - team2Goals - 1;
			round1Results[`bracket${bracketNumber}`].team = teamName1;
		} else {
			round1Results[`bracket${bracketNumber}`].goalsLeftOver = team2Goals - team1Goals - 1;
			round1Results[`bracket${bracketNumber}`].team = teamName2;
		}
	};

	round1(1, 'Belgium', 'France', b, f);
	round1(2, 'England', 'Croatia', e, c);

	// figure out combinations of winners

	if (!round1Results.bracket1.goalsLeftOver && !round1Results.bracket2.goalsLeftOver) {
		return [];
	} else if (round1Results.bracket1.goalsLeftOver && round1Results.bracket2.goalsLeftOver) {
		winners.push(round1Results.bracket1.team);
		winners.push(round1Results.bracket2.team);
		return winners.sort();
	} else if (round1Results.bracket1.goalsLeftOver) {
		winners.push(round1Results.bracket1.team);
	} else {
		winners.push(round1Results.bracket2.team);
	}

	return winners;
};

module.exports = possibleWinners;
