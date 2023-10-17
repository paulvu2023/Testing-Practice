import { capitalize, reverseString, calculator, caesarCipher } from "./script";

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
    "J xjmm ofwfs hjwf vq."
  );
  expect(caesarCipher("qrstuvwxyz", 1)).toBe("rstuvwxyza");
});

test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
