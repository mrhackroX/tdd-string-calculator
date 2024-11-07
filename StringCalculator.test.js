// add two comma seperated values. This will work for any numbers of values seperated by comma.
const { add } = require("./StringCalculator");

test("add two comma seperated values", () => {
  expect(add("23,17")).toBe(40);
  expect(add("23,17,45")).toBe(85);
});
