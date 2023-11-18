import { sum, subtract, multiply, divide, capitalize, stringLength, reverseString } from '../src';

describe('sum', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(3, 1)).toEqual(2);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 2)).toEqual(4);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(4, 2)).toEqual(2);
  });
});

describe('capitalize', () => {
  it('should change to capital letter', () => {
    expect(capitalize('orley')).toBe('Orley');
  });
});

describe('stringLength', () => {
  it('should give the string length', () => {
    expect(stringLength('Orley')).toBe(5);
  });
});

describe('reverseString', () => {
  it('should reversing a string', () => {
    expect(reverseString('Orley')).toBe('yelrO');
  });
});
