const sum = require('./index');

test('should 1 + 2 to equal 3', () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
})

test('should 4 + 9 to equal 13', () => {
    const result = sum(4, 9);

    expect(result).toBe(13)
})