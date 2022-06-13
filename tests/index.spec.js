const add = require('../index');

test('状況:1と2を渡す/結果:3を返す', () => {
  expect(add(1, 2)).toBe(3);
});
