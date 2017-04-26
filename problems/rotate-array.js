const rotateArray = matrix => {
  if (!Array.isArray(matrix)) {
    return null;
  } else if (matrix.length === 0) {
    return [];
  }


  let topLeft = matrix[0][0];
  let topRight = matrix[0][1];
  let bottomLeft = matrix[1][0]
  let bottomRight = matrix[1][1];

  matrix[0][0] = bottomLeft;
  matrix[0][1] = topLeft;
  matrix[1][0] = bottomRight;
  matrix[1][1] = topRight;


  // console.log(topLeft, topRight, bottomLeft, bottomRight);

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