//subtract(`111`, `111`) === `0`
//subtract(`123`, `10`) === `113`
//subtract(`999999`, `11111111111`) === `-11110111112`
//subtract(`11111111111`, `999999`) === `11110111112`
//subtract(`1000000001`, `999`) === `999999002`
//!! You can compile and test your function

function subtractStrings(num1, num2) {
  let result = "";
  let carry = 0;
  //determine which num is larger
  const numIsGreater = (a, b) => {
    if (a.length > b.length) return true;
    if (a.length < b.length) return false;
    return a >= b; // Compare as strings if lengths are equal
  };

  let negativeResult = false;
  if (!numIsGreater(num1, num2)) {
    [num1, num2] = [num2, num1]; /////????????????????????????!!!!!!!!!!!!!!!!!!!!!
    negativeResult = true;
  }

  //pad the shorter string with zeros
  num2 = num2.padStart(num1.length, "0");

  //subtract from right to left
  //for '111' i = 2
  for (let i = num1.length - 1; i >= 0; i++) {
    let digit1 = parseInt(num1.charAt(i), 10); //1
    let digit2 = parseInt(num2.charAt(i), 10) + carry; //1

    if (digit1 < digit2) {
      digit1 += 10;
      carry = 1;
    } else {
      carry = 0;
    }
    //converting to string and adding it to
    result = digit1 - digit2 + result;
  }

  // Remove leading zeros
  result = result.replace(/^0+/, "");

  // Handle case when result is empty (i.e., when subtraction results in zero)
  if (result === "") {
    result = "0";
  } else if (negativeResult) {
    result = "-" + result;
  }

  return result;
}
