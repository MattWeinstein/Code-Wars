/*We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).*/


function vowelIndices(word){
 let answer = []
 let wordArray = word.toLowerCase().split('')
 let vowel ='aeiouy'
  wordArray.forEach((element,index)=>{
    if(vowel.indexOf(element)>-1){
      answer.push(index+1)
    }
  })  
  return answer
}
