/*You might know some pretty large perfect squares. But what about the NEXT one?*/

function findNextSquare(sq) {
  let test = sq
    if(test**.5%1===0){
      return (test**.5+1)**2
    }else{
    return -1;
    }
}
