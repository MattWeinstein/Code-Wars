/*Transposing a single note means shifting its value by a certain interval.

The notes are as following:

A, A#, B, C, C#, D, D#, E, F, F#, G, G#.
This is using sharp notation, where '#' after a note means that it is one step higher than the note. So A# is one step higher than A.

An alternative to sharp notation is the flat notation:

A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab.
The 'b' after a note means that it is one step lower than the note.

*/
function transpose(song, interval){
    // Input of song notes and interval,song notes in array of any length, will be a note, interval = integer between -12 and 12
    // Response will be an array, same # of elements as the song
      
    let sharpArray = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    let flatArray  = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
    
    if(interval<0){
      interval+=12
    }
     let answer= song.map((element,index)=>{
       let noteIndex
       if(sharpArray.indexOf(element)===-1){
          noteIndex = flatArray.indexOf(element) 
         console.log(noteIndex)
       }else{
           noteIndex = sharpArray.indexOf(element)
       }
        return sharpArray[(noteIndex+interval)%12]
       
     })  
      
      // Return new index
      return answer
    }
    