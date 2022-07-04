/*Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)*/

function sortMyString(S) {
  let oddString = ''
  let evenString = ''
  for(let i=0;i<S.length;i++){
    if(i%2===0){   // Even
      evenString+=S[i]  
    }else{
      oddString+=S[i]
    }
  }
  return `${evenString} ${oddString}`
}
