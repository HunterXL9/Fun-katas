const morseCode = require('../morse-code');

describe("morseCode - Decoding Morse to Text", () => {
    test("should decode a single word", () => {
        expect(morseCode(".... ..")).toBe("HI");
    });

    test("should decode a sentence", () => {
        expect(morseCode(".... . .-.. .-.. ---")).toBe("HELLO");
    });

    test("should decode with numbers and mixed cases", () => {
        expect(morseCode("-. --- .-. - .... -.-. --- -.. . .-. ...")).toBe("NORTHCODERS");
    });

    test("should decode a full sentence", () => {
        const morse = "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
        expect(morseCode(morse)).toBe("GOOD MORNING NORTHCODERS");
    });

});

describe("morseCode - Encoding Text to Morse", () => {
    test("should encode a single word", () => {
        expect(morseCode("HI", true)).toBe(".... ..");
    });

    test("should encode a sentence", () => {
        expect(morseCode("HELLO", true)).toBe(".... . .-.. .-.. ---");
    });

    test("should encode with numbers and mixed cases", () => {
        expect(morseCode("NORTHCODERS", true)).toBe("-. --- .-. - .... -.-. --- -.. . .-. ...");
    });

    test("should encode a full sentence", () => {
        const text = "GOOD MORNING NORTHCODERS";
        const expectedMorse = "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
        expect(morseCode(text, true)).toBe(expectedMorse);
    });
});
