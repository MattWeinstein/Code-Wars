/*Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.*/

function isCoprime(x, y) {
let xFactors =[]
let yFactors =[]
    for(let i=1;i<=x;i++){
      if(x%i===0){
        xFactors.push(i)
      }
    }
      for(let i=1;i<=y;i++){
      if(y%i===0){
        yFactors.push(i)
      }
    }
  let allFactors= xFactors.concat(yFactors)
  let sortedArray = allFactors.sort((a,b)=>{
    return a-b  })  
  let coPrime = sortedArray.filter((element,index)=>element===sortedArray[index+1])
  return coPrime.length>1?false:true
}
