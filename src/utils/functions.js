import {
  initialState,
  passStrengthColors,
  onlyLettersPattern,
  onlyDigitsPattern,
  onlySymbolsPattern,
  digitsAndLettersPattern,
  digitsAndSymbolsPattern,
  lettersAndSymbolsPattern,
  letterSymbolAndDigitsPattern,
} from "./constants";

const checkPasswordStrength = (password) => {
  const nonValidPassStrength = password.length > 0 && password.length < 8;

  const easyPassStrength =
    onlyLettersPattern.test(password) ||
    onlyDigitsPattern.test(password) ||
    (onlySymbolsPattern.test(password) && password.length >= 8);

  const mediumPassStrength =
    (digitsAndLettersPattern.test(password) ||
      digitsAndSymbolsPattern.test(password) ||
      lettersAndSymbolsPattern.test(password)) &&
    password.length >= 8;

  const strongPassStrength =
    letterSymbolAndDigitsPattern.test(password) && password.length >= 8;

  if (nonValidPassStrength)
    return [
      passStrengthColors.red,
      passStrengthColors.red,
      passStrengthColors.red,
    ];

  if (easyPassStrength)
    return [
      passStrengthColors.red,
      passStrengthColors.grey,
      passStrengthColors.grey,
    ];

  if (mediumPassStrength)
    return [
      passStrengthColors.yellow,
      passStrengthColors.yellow,
      passStrengthColors.grey,
    ];

  if (strongPassStrength)
    return [
      passStrengthColors.green,
      passStrengthColors.green,
      passStrengthColors.green,
    ];

  return initialState;
};

export { checkPasswordStrength };
