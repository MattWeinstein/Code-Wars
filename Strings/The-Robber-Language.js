/*The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. 
It's used by kids in several screenplays created by Astrid Lindgren.The idea is that every consonant in a sentence is duplicated, 
with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). 
It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.*/

function robberEncode(sentence) {
  let newArray = sentence.split('')
  let consen = 'qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM'
  console.log(newArray)
  const answer = newArray.map((element)=> consen.includes(element)?element+(element.toLowerCase()===element?'o':'O')+element:element)
  console.log(answer)
  return answer.join('')
}
