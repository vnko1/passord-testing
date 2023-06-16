import {
  initialState,
  passStrengthColors,
  onlyLettersPattern,
  onlyDigitsPattern,
  onlySymbolsPattern,
  digitsAndLetterPattern,
  digitsAndSymbolPattern,
  lettersAndSymbolsPattern,
  letterSymbolAndDigits,
} from "./constants";

const checkPasswordStrength = (password) => {
  const easyPasStrength =
    onlyLettersPattern.test(password) ||
    onlyDigitsPattern.test(password) ||
    onlySymbolsPattern.test(password);

  const mediumPassStrength =
    digitsAndLetterPattern.test(password) ||
    digitsAndSymbolPattern.test(password) ||
    lettersAndSymbolsPattern.test(password);

  const strongPassStrength = letterSymbolAndDigits.test(password);

  if (password.length === 0) return initialState;

  if (password.length < 8)
    return [
      passStrengthColors.red,
      passStrengthColors.red,
      passStrengthColors.red,
    ];

  if (strongPassStrength)
    return [
      passStrengthColors.green,
      passStrengthColors.green,
      passStrengthColors.green,
    ];

  if (mediumPassStrength)
    return [
      passStrengthColors.yellow,
      passStrengthColors.yellow,
      passStrengthColors.grey,
    ];

  if (easyPasStrength)
    return [
      passStrengthColors.red,
      passStrengthColors.grey,
      passStrengthColors.grey,
    ];

  return initialState;
};

export { checkPasswordStrength };
