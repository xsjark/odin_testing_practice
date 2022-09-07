import { calculator } from "./calculator";

test('1+1 is 2', () => {
  expect(calculator(1,1).add()).toEqual(2);
});