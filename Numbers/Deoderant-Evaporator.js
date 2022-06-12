/*This program tests the life of an evaporator containing a gas.We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
The program reports the nth day (as an integer) on which the evaporator will be out of use.*/

function evaporator(content, evap_per_day, threshold){ 
  let currentMl = content
  let i =0
  while(currentMl>(threshold*.01*content)){
    currentMl = currentMl*((100-evap_per_day)/100)
    console.log(currentMl)
    i++
  }
  return i
}
