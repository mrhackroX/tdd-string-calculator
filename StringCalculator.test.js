// Support different delemeters.
const { add } = require("./StringCalculator");

test("Support different delemeters", () => {
  expect(add("//;\n7;8")).toBe(15); // Example -> //[delimiter]\n[numbers…]
});
