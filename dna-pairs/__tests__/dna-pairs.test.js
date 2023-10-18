const dnaPair = require('../dna-pairs.js');

test('handles empty string input', () => {
  expect(dnaPair("")).toEqual([]);
});

test('handles lowercase input', () => {
  expect(dnaPair("atcg")).toEqual([["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]);
});

test('pairs single base G correctly', () => {
  expect(dnaPair("G")).toEqual([["G", "C"]]);
});

test('pairs AG correctly', () => {
  expect(dnaPair("AG")).toEqual([["A", "T"], ["G", "C"]]);
});

test('pairs ATAG correctly', () => {
  expect(dnaPair("ATAG")).toEqual([["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"]]);
});


test('ignores invalid letters in ATZG', () => {
  expect(dnaPair("ATZG")).toEqual([["A", "T"], ["T", "A"], ["G", "C"]]);
});
