// if string has only one value, return that value
const { add } = require("./StringCalculator");

test("If string has only one value, return that value", () => {
  expect(add("23")).toBe(23);
});
