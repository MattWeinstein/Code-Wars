/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.*/

function persistence(num) {
  let answerNum = num.toString()
  
  if(answerNum.length>1){
    
  for(let i =1;answerNum.length>1;i++){
  answerNum = answerNum.split('').map(element=>Number(element)).reduce((curr,acc)=> curr*acc).toString()
  if(answerNum.length===1){
    return i
  }
}
    
}else{
  return 0
  }
}
