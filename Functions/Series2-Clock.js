//Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  m += (h*60)
  s += (m*60)
  return s*1000
}
