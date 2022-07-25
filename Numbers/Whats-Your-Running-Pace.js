/*In this Kata, we will calculate running pace. To do that, we have to know the distance and the time.*/

function runningPace(distance, time){
let totalTimeArr =time.split(':')
let totalTimeMin =((Number(totalTimeArr[0])*60) + Number(totalTimeArr[1]))/60
let rawSpeed = totalTimeMin/distance
let rawSpeedArr = rawSpeed.toString().split('.')
let secondsRound
if(rawSpeedArr[1]){
  let seconds = Number('.'+ rawSpeedArr[1].toString())
  secondsRound = Math.floor(seconds*60+.0000001)
  if(secondsRound<10){
    secondsRound= '0'+secondsRound
  }
}else{
  secondsRound='00'
}
return `${rawSpeedArr[0]}:${secondsRound}` 
}
