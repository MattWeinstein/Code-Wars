/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/

function highAndLow(numbers){
 let numArray = numbers.split(' ')
 let newArray = numArray.map(element=>Number(element))
 let answer = newArray.sort((a,b)=>{
   return a-b
 })
  return `${ answer[answer.length-1]} ${answer[0]}`
}
