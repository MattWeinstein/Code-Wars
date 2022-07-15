/*The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.*/

function sumDigPow(a, b) {
let answerArr = []
for(let num =a;num<b;num++){
      let sum = 0
  for(let i =0;i<num.toString().length;i++){
    let eachNum =num.toString()
    sum+=Number(eachNum[i])**(i+1)
    if(sum ===Number(eachNum)){
        answerArr.push(Number(eachNum))
    }
  }
}
return answerArr
}
