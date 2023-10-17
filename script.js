function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  divide(num1, num2) {
    return num1 / num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },
};

function caesarCipher(string, shiftFactor) {
  const outputString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].)
  }
}

function isAlphabetical(char) {
  const pattern = /^[a-zA-Z]$/;
  return pattern.test(char);
}

export { capitalize, reverseString, calculator };
