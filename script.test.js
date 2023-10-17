import { capitalize, reverseString } from "./script";

test("Capitalizes", () => {
  expect(capitalize("paul")).toBe("Paul");
});

test("Capitalizes", () => {
  expect(reverse("P poT")).toBe("Top P");
});
