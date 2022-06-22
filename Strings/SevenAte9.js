/*Write a function that removes every lone 9 that is inbetween 7s.*/

function sevenAte9(str) {
  let newString =str.split('')
  for(let i=0;i<str.length;i++){
    if(newString[i]==='9'&&newString[i-1]+newString[i+1]==='77'){
      newString.splice(i,1)
      i=i-1
    }
  }
  return newString.join('')
}
