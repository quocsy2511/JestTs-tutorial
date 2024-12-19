import { sum } from "../app/BasicUtil";

test("should function sum run", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
  expect(result).toBeLessThan(4);
});
