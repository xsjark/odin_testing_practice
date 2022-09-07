import { caesarCipher } from "./caesarCipher";

test('hello shift 2 is jtnnq', () => {
  expect(caesarCipher("hello", 2)).toBe("jgnnq");
});