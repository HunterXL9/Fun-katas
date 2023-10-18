const updateRemoteStudents = require('../update-remote-students.js');

describe('Tests for updateRemoteStudents', () => {
  
  test('should handle empty arrays', () => {
    const input = [];
    const output = [];
    expect(updateRemoteStudents(input)).toEqual(output);
  });
  
  test('should update student without location to remote', () => {
    const input = [{ name: 'Euler', age: 27 }];
    const output = [{ name: 'Euler', age: 27, location: 'remote' }];
    expect(updateRemoteStudents(input)).toEqual(output);
  });

  test('should not change students with existing locations', () => {
    const input = [
      { name: 'Hypatia', age: 31, location: 'leeds' },
      { name: 'Ramanujan', age: 22 },
      { name: 'Tao', age: 47, location: 'manchester' }
    ];
    const output = [
      { name: 'Hypatia', age: 31, location: 'leeds' },
      { name: 'Ramanujan', age: 22, location: 'remote' },
      { name: 'Tao', age: 47, location: 'manchester' }
    ];
    expect(updateRemoteStudents(input)).toEqual(output);
  });
  
  test('should not mutate the original array', () => {
    const input = [
      { name: 'Hypatia', age: 31, location: 'leeds' },
      { name: 'Ramanujan', age: 22 }
    ];
    const original = [...input];
    updateRemoteStudents(input);
    expect(input).toEqual(original);
  });
});
