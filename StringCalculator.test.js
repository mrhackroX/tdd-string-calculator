// Calling our function with negative number.It should throw exception.
const { add } = require("./StringCalculator");

test("If string is blank, return 0.", () => {
  expect(add("")).toBe(0);
});

test("If string has only one value, return that value", () => {
  expect(add("23")).toBe(23);
});

test("add two or more comma seperated values", () => {
  expect(add("23,17")).toBe(40);
  expect(add("23,17,45")).toBe(85);
});

test("handle newlines between number string", () => {
  expect(add("23\n17,45")).toBe(85);
});

test("Support different delemeters", () => {
  expect(add("//;\n7;8")).toBe(15); // Example -> //[delimiter]\n[numbers…]
});

test("Calling our function with negative number.It should throw exception", () => {
  expect(() => add("12,-5,-1")).toThrow(
    "Negative numbers are not allowed: -5, -1"
  );
});
