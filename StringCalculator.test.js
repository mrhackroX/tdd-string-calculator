// add two comma seperated values. This will work for any numbers of values seperated by comma.
const { add } = require("./StringCalculator");

test("If string has only one value, return that value", () => {
  expect(add("23,17")).toBe(40);
  expect(add("23,17,45")).toBe(85);
});
