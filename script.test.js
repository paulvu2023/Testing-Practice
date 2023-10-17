import { capitalize, reverseString, calculator } from "./script";

test("Capitalizes", () => {
  expect(capitalize("paul")).toBe("Paul");
});

test("Reverses string", () => {
  expect(reverseString("P poT")).toBe("Top P");
});

test("Calculator", () => {
  expect(calculator.add(3, 4.01)).toBeCloseTo(7.01);
  expect(calculator.subtract(5, 3)).toBeCloseTo(2);
  expect(calculator.divide(9, 3)).toBeCloseTo(3);
  expect(calculator.multiply(9, 12)).toBeCloseTo(108);
});

test("Caesar Cipher", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
  expect(caesarCipher("I will never give up.", 1)).toBe(
    "H vhkk mdudq fhud to."
  );
});
