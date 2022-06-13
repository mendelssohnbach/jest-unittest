// 1 を渡すと文字列'1'を返す
const fizzBuzz = require('../index');

describe('数値を文字列に変換する', () => {
  test("1 を渡すと文字列'1'を返す", () => {
    expect(fizzBuzz(1)).toBe('1');
  });
});

describe('3 の倍数を渡すと文字列「Fizz」を返す', () => {
  test('3 を渡すと文字列「Fizz」を返す', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
});

describe('5 の倍数を渡すと文字列「Buzz」を返す', () => {
  test('5 を渡すと文字列「Buzz」を返す', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
});

describe('3 と 5 両方の倍数を渡すと文字列「FizzBuzz」を返す', () => {
  test('15 を渡すと文字列「FizzBuzz」を返す', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});
