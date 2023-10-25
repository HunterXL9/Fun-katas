const { sentenceToCamelCase, camelToEnglish }  = require('../sentence-to-camel-case');

describe('sentenceToCamelCase', () => {
    test('should convert to UpperCamelCase', () => {
        expect(sentenceToCamelCase("this sentence", true)).toBe("ThisSentence");
    });

    test('should convert to lowerCamelCase', () => {
        expect(sentenceToCamelCase("this sentence", false)).toBe("thisSentence");
    });

    test('should handle mixed case input for UpperCamelCase', () => {
        expect(sentenceToCamelCase("This Bigger strange Sentence", true)).toBe("ThisBiggerStrangeSentence");
    });
    
    test ('should handle jumble mix of uppercase and lowercase letters', () => {
        expect(sentenceToCamelCase("tHE foX RAn oVeR THe rOaD", true)).toBe ("TheFoxRanOverTheRoad");
    });
});

describe('camelToEnglish', () => {
    test('should convert camelCase back to a normal English sentence', () => {
        expect(camelToEnglish("thisBiggerStrangeSentence")).toBe("This bigger strange sentence.");
    });
});
