import { capitalize } from "./capitalize";

test('changes hello to HELLO', () => {
  expect(capitalize("hello")).toBe("HELLO");
});