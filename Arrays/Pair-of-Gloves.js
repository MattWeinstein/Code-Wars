/*Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.*/

function numberOfPairs(gloves){ 
let gloveArray = gloves
let glovePairs = 0
  while(gloveArray.length>0){
    let gloveselection = gloveArray[0]
    let filteredGloves = gloveArray.filter(element=>element ===gloveselection).length
    gloveArray = gloveArray.filter(element=>element !==gloveselection)
    if(filteredGloves>1){
    glovePairs += Math.floor(filteredGloves/2)
    }
  }
  return glovePairs
}
