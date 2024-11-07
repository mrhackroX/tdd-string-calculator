// handle newlines between number string.
const { add } = require("./StringCalculator");

test("handle newlines between number string", () => {
  expect(add("23\n17,45")).toBe(85);
});
