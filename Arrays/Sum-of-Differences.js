/*Your task is to sum the differences between consecutive pairs in the array in descending order.*/


function sumOfDifferences(arr) {
let newArray = arr.sort((a,b)=>{
  return a-b  
})

let length = newArray.length
if (length===1){
  return 0
}
  
let answer =0
for(let i=(length-1);i>0;i--){
  answer += newArray[i]-newArray[i-1]
  
  }
return answer
}
