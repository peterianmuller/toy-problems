const rotateArray = matrix => {
  if (!Array.isArray(matrix)) {
    return null;
  } else if (matrix.length === 0) {
    return [];
  }

  if (matrix[0].length === 2) {
    let topLeft = matrix[0][0];
    let topRight = matrix[0][1];
    let bottomLeft = matrix[1][0]
    let bottomRight = matrix[1][1];

    matrix[0][0] = bottomLeft;
    matrix[0][1] = topLeft;
    matrix[1][0] = bottomRight;
    matrix[1][1] = topRight;
  }

  if (matrix[0].length === 3) {
    let switchCorners = matrix => {
      let terminalIndex = matrix.length - 1;

      let topLeft = matrix[0][0]
      let topRight = matrix[0][terminalIndex];
      let bottomLeft = matrix[terminalIndex][0]
      let bottomRight = matrix[terminalIndex][terminalIndex];

      //console.log(topLeft, topRight, bottomLeft, bottomRight);

      matrix[0][0] = bottomLeft;
      matrix[0][terminalIndex] = topLeft;
      matrix[terminalIndex][0] = bottomRight;
      matrix[terminalIndex][terminalIndex] = topRight;
    }

    let switchNonCorners = matrix => {
      let terminalIndex = matrix.length - 1;

      let topMiddle = matrix[0][1];
      let rightMiddle = matrix[1][terminalIndex];
      let leftMiddle = matrix[1][0]
      let bottomMiddle = matrix[terminalIndex][1];

      //console.log(topMiddle, rightMiddle, leftMiddle, bottomMiddle);

      matrix[0][1] = leftMiddle;
      matrix[1][terminalIndex] = topMiddle;
      matrix[1][0] = bottomMiddle;
      matrix[terminalIndex][1] = rightMiddle;
    }
    switchCorners(matrix);
    switchNonCorners(matrix);
    //console.log('matrix is:, ', matrix);
  }



  // 2 x 2 matrix
  // for (var i = 0; i < matrix.length; i++) {
  //   for (var j = 0; j < matrix[0].length; j++) {
  //     //save first element
  //     if (i === 0 && j === 0) {

  //     } 
  //   }
  // }


  return matrix;

};

module.exports = rotateArray;

//[[1,2], [3,4]] =>  [[3,1],[4,2]];