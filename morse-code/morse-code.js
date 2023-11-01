// Please do not change the name of this function
const morseToText = require('./morse-data').morseToText;
const textToMorse = require('./morse-data').textToMorse;

function morseCode (input,toMorse = false) {
  
    if (toMorse) {
        return textToMorseEncode(input);
    } else {
        return morseToTextDecode(input);
    }
}
function morseToTextDecode(input){
    return input.split("   ")
    .map(word => word.split(" ") 
    .map(character => {
        const textCharacter = morseToText[character];
        // console.log(textCharacter); 
        return textCharacter;
      })
    .join("")).join(" ");
    }
function textToMorseEncode(textStr){
    const upperText = textStr.toUpperCase();
    return upperText.split(" ")
    .map(word => word.split("")
    .map(character => textToMorse[character])
    .join(" ")
    )
    .join("   "); 
};

module.exports = morseCode;

const morseText = morseCode('Hello World', true);
console.log(morseText);
const decodedText = morseCode('.... . .-.. .-.. ---   .-- --- .-. .-.. -..', false);
console.log(decodedText);