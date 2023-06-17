import {
  initialState,
  nonValidPass,
  easyPass,
  mediumPass,
  strongPass,
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

  if (nonValidPassStrength) return nonValidPass;

  if (easyPassStrength) return easyPass;

  if (mediumPassStrength) return mediumPass;

  if (strongPassStrength) return strongPass;

  return initialState;
};

export { checkPasswordStrength };
