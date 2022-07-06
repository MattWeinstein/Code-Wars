/*You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.*/

function mergeArrays(arr1, arr2) {
  
  if(arr1.length+arr2.length===0){ 
    return []
  }else{
 let combinedArr = arr1.concat(arr2)
 let sortedArr = combinedArr.sort((a,b)=>{
                                return a-b
                                })
  for(let i=0; i<sortedArr.length-1;i++){
    if(sortedArr[i]===sortedArr[i+1]){
      sortedArr.splice(i,1)
      i--
    } 
  }
  return sortedArr
  }
}
