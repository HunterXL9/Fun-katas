const pigLatin = require('../pig-latin');

describe('pigLatin', () => {
    test('should convert words starting with consonants correctly', () => {
        expect(pigLatin("northcoders")).toBe('orthcodersnay');
        expect(pigLatin("sheffield")).toBe('effieldshay');
    });

    test('should convert words starting with vowels correctly', () => {
        expect(pigLatin("algorithm")).toBe('algorithmway');
    });

    test('should handle sentences with spaces correctly', () => {
        expect(pigLatin("keep on coding")).toBe('eepkay onway odingcay');
    });
});
