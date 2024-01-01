/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number > -1;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(/* queen, king */) {
  throw new Error('Not implemented');
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b || b === c || c === a) {
    if (a + b > c && b + c > a) {
      return true;
    }
    return false;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let answer = '';
  let n = num;
  while (n > 0) {
    if (n > 9) {
      for (let i = 0; i < Math.floor(n / 10); i += 1) {
        answer += 'X';
      }
      n %= 10;
    } else {
      switch (n) {
        case 1:
          answer += 'I';
          break;
        case 2:
          answer += 'II';
          break;
        case 3:
          answer += 'III';
          break;
        case 4:
          answer += 'IV';
          break;
        case 5:
          answer += 'V';
          break;
        case 6:
          answer += 'VI';
          break;
        case 7:
          answer += 'VII';
          break;
        case 8:
          answer += 'VIII';
          break;
        case 9:
          answer += 'IX';
          break;
        default:
          n = 0;
          break;
      }
      n = 0;
    }
  }
  return answer;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (result) {
      result += ' ';
    }
    switch (numberStr[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '-':
        result += 'minus';
        break;
      case '.':
      case ',':
        result += 'point';
        break;
      default:
        break;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = '';
  for (let j = str.length - 1; j > Math.floor(str.length / 2); j -= 1) {
    result += str[j];
  }
  for (let i = 0; i < result.length; i += 1) {
    if (str[i] !== result[i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  while (number > -1) {
    const n = number % 10;
    if (n === digit) {
      return true;
    }
    number = Math.floor(number / 10) || -1;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let sumFirstHalf = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      sumFirstHalf += arr[j];
    }
    let sumLastHalf = 0;
    for (let k = i + 1; k < arr.length; k += 1) {
      sumLastHalf += arr[k];
    }
    if (sumFirstHalf === sumLastHalf) {
      return i;
    }
  }
  return -1;
}
/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const numberMatrixEnd = size ** 2;
  let Istart = 0;
  let Iend = 0;
  let Jstart = 0;
  let Jend = 0;
  let i = 0;
  let j = 0;
  let countMatrixNumber = 1;
  const matrix = [];

  for (let row = 0; row < size; row += 1) {
    matrix[row] = [];
    for (let col = 0; col < size; col += 1) {
      matrix[row][col] = 0;
    }
  }

  while (countMatrixNumber <= numberMatrixEnd) {
    matrix[i][j] = countMatrixNumber;
    if (i === Istart && j < size - Jend - 1) {
      j += 1;
    } else if (j === size - Jend - 1 && i < size - Iend - 1) {
      i += 1;
    } else if (i === size - Iend - 1 && j > Jstart) {
      j -= 1;
    } else {
      i -= 1;
    }

    if (i === Istart + 1 && j === Jstart && Jstart !== size - Jend - 1) {
      Istart += 1;
      Iend += 1;
      Jstart += 1;
      Jend += 1;
    }
    countMatrixNumber += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copyMatrix = matrix;
  const newMatrix = [];
  const index = matrix.length - 1;
  for (let i = matrix.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (!newMatrix[j]) {
        newMatrix[j] = [];
      }
      newMatrix[j][index - i] = matrix[i][j];
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    copyMatrix[i] = newMatrix[i];
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const result = arr;
  for (let i = 0; i < result.length; i += 1) {
    const current = result[i];
    let j = i - 1;
    while (j >= 0 && result[j] > current) {
      result[j + 1] = result[j];
      j -= 1;
    }
    result[j + 1] = current;
  }
  return result;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  let count = iterations;
  while (count > 0) {
    let leftStr = '';
    let rightStr = '';
    for (let i = 1; i < result.length; i += 2) {
      leftStr += result[i - 1];
      rightStr += result[i];
    }
    result = leftStr + rightStr;
    count -= 1;
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = Array.from(String(number));
  const dig = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    dig.unshift(Number(arr[i]));
    if (dig.length > 2) {
      const currentArr = dig.map((el) => el);
      const max =
        currentArr.sort()[currentArr.length - 1] === dig[0]
          ? false
          : currentArr.sort()[currentArr.length - 1];
      const min = currentArr.sort()[0];
      currentArr.reverse();
      const someNumber = [];
      let result = 0;
      if (max) {
        for (let j = currentArr.length - 1; j >= 0; j -= 1) {
          const k =
            currentArr.slice(0, j).join('') +
            min +
            currentArr.slice(j, -1).join('');
          if (k > min) {
            someNumber.push(k);
            someNumber.sort();
          }
        }
        if (someNumber.length > 0) {
          result = Number(arr.slice(0, i).join('') + someNumber[0]);
          return result;
        }
      } else if (dig.length === 2) {
        result = Number(arr.slice(0, i).join('') + max + min);
        return result;
      }
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
