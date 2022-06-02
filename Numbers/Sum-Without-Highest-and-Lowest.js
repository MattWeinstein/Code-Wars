/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.*/

function sumArray(array) {
  if(array ===null){
     return 0
  } else if(array===undefined){
    return 0
  } else if(array.length<=2){
    return 0
  }
  else{
  let sortedArray = array.sort((a,b)=>{return a-b})  
  let answer = sortedArray.reduce((cur,acc)=>cur+acc)- sortedArray[0] - sortedArray[sortedArray.length-1]  
    return answer
  } 
  
}
