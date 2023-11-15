import { sum, subtract, multiply } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('blah', () => {
  it('works', () => {
    expect(subtract(3, 1)).toEqual(2);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 2)).toEqual(4);
  });
});
