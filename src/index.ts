export const sum = (a: number, b: number) => {
  return a + b;
};

export const subtract = (a: number, b: number) => {
  return a - b;
};

export const multiply = (a: number, b: number) => {
  return a * b;
};

export const divide = (a: number, b: number) => {
  return a / b;
};

export const capitalize = (str: string) => {
  if (typeof str !== 'string') return 'Please provide a string';

  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
};

export const stringLength = (str: string) => {
  const isValid = str.length >= 1 && str.length <= 10;
  if (!isValid) return 'invalid string length';

  return str.length;
};

export const reverseString = (str: string) => str.split('').reverse().join('');
