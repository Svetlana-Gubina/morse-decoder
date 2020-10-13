const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const SPACE = '**********';
const LEN = 10;

const digitsToLetter = (str) => {
  const DOT = '10';
  const DASH = '11';

  let digits = str.match(new RegExp('.{1,' + 2 + '}', 'g'));
  let result = '';
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === DOT) {
      result += '.';
    } else if (digits[i] === DASH) {
      result += '-';
    }
  }

  return MORSE_TABLE[result];
};

function decode(expr) {
  let encodedLetters = expr.match(new RegExp('.{1,' + LEN + '}', 'g'));

  let finalString = '';
  for (let i = 0; i < encodedLetters.length; i++) {
    if (encodedLetters[i] === SPACE) {
      finalString += " ";
    } else {
      finalString += digitsToLetter(encodedLetters[i]);
    }
  }

  return finalString;
}

module.exports = {
  decode
}
