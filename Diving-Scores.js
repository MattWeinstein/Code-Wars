/*For this Kata you will need to create a function which works out the score of a dive in an Olympic diving competition and displays it in the correct format. The function will take 2 arguments:

An array of numbers representing the judges' scores, called scores
A number representing the degree of difficulty of the dive, called tariff
The 2 lowest and 2 highest scores by the judges are discarded and the 3 remaining scores are added together. The result of this is then multiplied by the difficulty ( tariff ) to get the score for the dive.*/

function scoreOfDive(scores, tariff) {
let sortedArray = scores.sort((a,b)=>{
  return a-b
})
let answer = (sortedArray[2]+sortedArray[3]+sortedArray[4])
return Math.round(answer*100*tariff)/100
}
