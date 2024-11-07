// test for empty string
const { add } = require("./StringCalculator");

test("If string is blank, return 0.", () => {
  expect(add("")).toBe(0);
});
