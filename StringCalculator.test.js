// Calling our function with negative number.It should throw exception.
const { add } = require("./StringCalculator");

test("Calling our function with negative number.It should throw exception", () => {
  expect(() => add("12,-5,-1")).toThrow(
    "Negative numbers are not allowed: -5, -1"
  );
});
