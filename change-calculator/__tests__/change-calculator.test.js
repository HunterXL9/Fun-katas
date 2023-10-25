const changeCalculator = require('../change-calculator.js'); 

describe.only('tests for changeCalculator', () => {
  test('should return correct change for 1p', () => {
    expect(changeCalculator(1)).toEqual({'1':1});
  });

  test('should return correct change for 2p', () => {
    expect(changeCalculator(2)).toEqual({'2':1});
  });

  test('should return correct change for 7p', () => {
    expect(changeCalculator(7)).toEqual({'5':1,'2':1});
  });

  test('should return correct change for 13p', () => {
    expect(changeCalculator(13)).toEqual({'10':1,'2':1,'1':1});
  });

});
