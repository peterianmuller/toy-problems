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

// try second move: x, y + x       




const reachCoordinates = (x1,x2, y1, y2) => {
	
	if ( x1 > x2 || y1 > y2) {
		return false;
	}  

	if (x1 === x2 && y1 === y2) {
	  return true;	
	}

	
}