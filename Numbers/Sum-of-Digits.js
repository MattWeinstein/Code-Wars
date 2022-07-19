/*Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.*/

function digital_root(n) {
  let string = n.toString()
      let result = 0
  while(1<string.length){
    let newArr = string.split('')
    result = 0
    for(let j=0;j<newArr.length;j++){
      result += Number(newArr[j])
      string =result.toString()
    }
  }
  return result
}
