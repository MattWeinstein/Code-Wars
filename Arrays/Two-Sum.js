/*Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).*/

function twoSum(numbers, target) {
for(let i=0 ;i<numbers.length;i++){
  let index = numbers.indexOf(target-numbers[i])
  console.log(index)
    if(index!==-1 && index!==i){
      return [index,i]
    }
    }
}
