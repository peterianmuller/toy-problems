'use strict'

const fisherYates = array => {
  if (!array || !Array.isArray(array)) {
    return null;
  }
  // iterate over array
  array.forEach((item,index)=>{
    let randomInd = index + Math.floor(Math.random() * (array.length - index));
  //swap current element with random element
    array[randomInd] = item;
    array[index] = array[randomInd];
  });
  return array;
};

module.exports = fisherYates;