/*Karan's company makes software that provides different features based on the version of operating system of the user.

For finding which version is more recent, Karan uses the following method:

function compareVersions (version1, version2) {
  return parseFloat(version1) >= parseFloat(version2);
}
While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

Karan's function fails for the new version:

compareVersions ("10.9", "10.10");       // returns true, while it should return false
Karan now wants to spend some time to right a more robust version comparison function that works for any future version/sub-version updates.

*/

function compareVersions (version1, version2) {
let result,loop
let array1 = version1.split('.')
let array2 = version2.split('.')

if(array1.length<=array2.length){
  loop = array2.length
} else{
  loop = array1.length
}
let i=0

while(i<=loop){
  if(array1[0]==array2[0] && version1.length===version2.length){
    result = true
    return result
  }
  
  else if(array1[i]!=array2[i]){ //If subversion is not the same
    if(array1[i] && array2[i]){ // If both 
      result = Number(array1[i])>Number(array2[i])
      return result
    } else if(!array1[i]){
      result = false
      return result
    } else if (!array2[i]){
      result = true
      return result
    }
    }else{
    i++
  }
}
return result
}
