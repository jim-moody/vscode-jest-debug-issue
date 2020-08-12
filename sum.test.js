function addTwoNumbers(a, b) {
  const sum = a + b;

  return sum;
}

describe("test", () => {
  test("sum", () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
  });
});
