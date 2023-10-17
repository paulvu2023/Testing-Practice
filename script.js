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
  let outputString = "";
  for (let i = 0; i < string.length; i++) {
    if (isAlphabetical(string[i])) {
      const charCode = string.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        outputString += String.fromCharCode(
          ((charCode + shiftFactor - 65) % 26) + 65
        );
      } else {
        outputString += String.fromCharCode(
          ((charCode + shiftFactor - 97) % 26) + 97
        );
      }
    } else {
      outputString += string[i];
    }
  }
  return outputString;
}

function isAlphabetical(char) {
  const pattern = /^[a-zA-Z]$/;
  return pattern.test(char);
}

export { capitalize, reverseString, calculator, caesarCipher };
