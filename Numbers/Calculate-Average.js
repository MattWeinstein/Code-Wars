/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.*/

function find_average(array) {
  return array.length>0?array.reduce((cur,acc)=> cur+acc)/array.length:0
}
