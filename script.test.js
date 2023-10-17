import { capitalize, reverseString, calculator } from "./script";

test("Capitalizes", () => {
  expect(capitalize("paul")).toBe("Paul");
});

test("Reverses string", () => {
  expect(reverseString("P poT")).toBe("Top P");
});
