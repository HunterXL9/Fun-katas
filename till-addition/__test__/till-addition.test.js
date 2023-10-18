const tillAddition = require('../till-addition.js');  

describe('Tests for till-addition', () => {
  
  test('should calculate total for 1p and 2p', () => {
    expect(tillAddition({ "1p": 1, "2p": 1 })).toBe("£0.03");
});

test('should calculate total for 1p, 2p, 5p, 10p, and 20p', () => {
    expect(tillAddition({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 })).toBe("£0.38");
});

test('should calculate total for 5p, 10p, 20p, 50p, and £1', () => {
    expect(tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })).toBe("£1.85");
});

test('should return "£0.00" for an empty till', () => {
    expect(tillAddition({})).toBe("£0.00"); 
});

});