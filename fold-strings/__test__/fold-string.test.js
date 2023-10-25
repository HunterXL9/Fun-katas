const foldString = require('../fold-string');

describe('foldString', () => {
    test('should handle single word with even length', () => {
        expect(foldString("code")).toBe("oced");
    });

    test('should handle single word with even length (no middle letter)', () => {
        expect(foldString("abcdef")).toBe("cbafed");
    });

    test('should handle single word with odd length (with a middle letter)', () => {
        expect(foldString("javascript")).toBe("savajtpirc");
    });

    test('should handle single word with larger odd length', () => {
        expect(foldString("Northcoders")).toBe("htroNcsredo");
    });

    test('should handle sentences with spaces', () => {
        expect(foldString("javascript is cool")).toBe("savajtpirc is oclo");
    });
});
