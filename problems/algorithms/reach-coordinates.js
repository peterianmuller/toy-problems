// input: two positive ints x1 and y1 as starting coords, and two positive ints x2 and y2 as target coordinates
// the robot can move from its coordinates either to x + y, y or x, y + x
// example: 2, 4 -> 6, 4 or 2, 6

// psudocode

// base cases:

// check if current coordinates out of range
// if so return false

// check if current coordinates are the same as target coordinates
// if so return true

// recursive cases:

// try first move: x + y, y
// if we just return this than we are not trying the other option

// try second move: x, y + x
// if we just place a second return statement than we will never reach this

// we need to leave open the possbility of a combination of first move, second move, third move, etc.

reachCoordinates = (x1, y1, x2, y2) => {
	if (x1 > x2 || y1 > y2) {
		return false;
	}

	if (x1 === x2 && y1 === y2) {
		return true;
	}

	return reachCoordinates(x1 + y1, y1, x2, y2) || reachCoordinates(x1, x1 + y1, x2, y2);
};

module.exports = reachCoordinates;
