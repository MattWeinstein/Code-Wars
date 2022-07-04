/*You will be given a number and you will need to return it as a string*/

function expandedForm(num) {
  let numString =num.toString()
  let answerString =''
  for(let i=0;i<numString.length;i++){
    let eachNum
    if(numString[i]!=='0'){
      eachNum = numString[i]*(10**(numString.length-i-1))
      if(i===0){
        answerString+=`${eachNum}`
      }else{
        answerString+=` + ${eachNum}`
      }
    }
  }
  return answerString
}
