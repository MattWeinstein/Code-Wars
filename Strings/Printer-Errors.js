/*You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.*/
function printerError(s) {
  let printerLetters = 'abcdefghijklm'
  let num =0
  let denom=0
  for(let i=0;i<s.length;i++){
    if(printerLetters.indexOf(s[i])<0){
      num++
    }
  }
  return `${num}/${s.length}`
}
