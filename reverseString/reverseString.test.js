import { reverseString } from "./reverseString";

test('reverses hello to olleh', () => {
  expect(reverseString("hello")).toBe("olleh");
});