/*Your task is to write a function that takes a string and return a new string with all vowels removed.*/

function disemvowel(str) {
  let vowels = 'aeiouAEIOU'
  let newArr = str.split('')
  console.log(newArr)

  for(let i=0;i<newArr.length;i++){
    if(vowels.indexOf(newArr[i])>-1){
      newArr.splice(i,1)
      i--
    }
  }
  return newArr.join('')
}
