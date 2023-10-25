// Please do not change the name of this function
function sentenceToCamelCase(sentence, isUpperCamelCase) {

    let words = sentence.toLowerCase().split(' ');

    if (isUpperCamelCase) {
        return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    } else {
        return words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    }
}

function camelToEnglish(camelSentence) {
    let sentence = camelSentence.replace(/([A-Z])/g, ' $1');
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase() + ".";
};



module.exports = { sentenceToCamelCase, camelToEnglish };
