const passStrengthColors = {
  grey: "grey",
  red: "red",
  yellow: "yellow",
  green: "green",
};

const initialState = [
  passStrengthColors.grey,
  passStrengthColors.grey,
  passStrengthColors.grey,
];

const onlyLettersPattern = /^[A-Za-z\s]*$/;
const onlyDigitsPattern = /^\d+$/;
const onlySymbolsPattern = /\W|_/g;
const digitsAndLetterPattern = /[^A-Za-z0-9]+/;
const digitsAndSymbolPattern = /[^0-9\W|_]+/;
const lettersAndSymbolsPattern = /[^A-Za-z\W|_]+/;
const letterSymbolAndDigits =
  /^.*(?=.{8,120})(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;

export {
  initialState,
  passStrengthColors,
  onlyLettersPattern,
  onlyDigitsPattern,
  onlySymbolsPattern,
  digitsAndLetterPattern,
  digitsAndSymbolPattern,
  lettersAndSymbolsPattern,
  letterSymbolAndDigits,
};
