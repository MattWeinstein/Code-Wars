/*Count the number of divisors of a positive integer n.*/

function getDivisorsCnt(n){
 let answer = 0
 for(let i=1;i<n;i++){
   n%i===0?answer+=1:answer+=0
 }
return answer+1
}
