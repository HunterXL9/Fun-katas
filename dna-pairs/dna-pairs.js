// Please do not change the name of this function
function dnaPairs(dna) {
 
    let result = [];
    
    let upperDna = dna.toUpperCase();
    
    for (let i = 0; i < upperDna.length; i++) {
      let letter = upperDna[i];
        
      if (letter === 'A') {
            result.push(['A', 'T']);
        } else if (letter === 'T') {
            result.push(['T', 'A']);
        } else if (letter === 'C') {
            result.push(['C', 'G']);
        } else if (letter === 'G') {
            result.push(['G', 'C']);
        } 
    }
    
    return result;


}

module.exports = dnaPairs;
