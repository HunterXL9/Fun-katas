// Please do not change the name of this function
function foldString (str) {
  return str.split(' ')
        .map(word => {
            const mid = Math.floor(word.length / 2);
            const firstHalf = word.slice(0, mid);
            const secondHalf = word.slice(-mid);
            const middleLetter = word.length % 2 !== 0 ? word[mid] : "";
            return[...firstHalf].reverse().join('') + middleLetter + [...secondHalf].reverse().join('');
    })
    .join(' ');  
}
    
module.exports = foldString
