// Please do not change the name of this function
function pigLatin(str) {
const vowels = /[aeiouAEIOU]/g;
   return str.split(' ')
   .map(word => {
      if (vowels.test(word[0])) {
      return word + 'way';
   } else {
      const firstVowelIndex = word.search(vowels);
      return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
        }
    })
    .join(' ');
};

module.exports = pigLatin
