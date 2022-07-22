/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').*/

function DNAtoRNA(dna) {
  
  return dna.split('').map(element => element === "T" ? "U" : element).join('')

}
