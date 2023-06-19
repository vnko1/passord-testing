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
  if (password.length > 0 && password.length < 8) return nonValidPass;

  if (
    onlyLettersPattern.test(password) ||
    onlyDigitsPattern.test(password) ||
    (onlySymbolsPattern.test(password) && password.length >= 8)
  )
    return easyPass;

  if (
    (digitsAndLettersPattern.test(password) ||
      digitsAndSymbolsPattern.test(password) ||
      lettersAndSymbolsPattern.test(password)) &&
    password.length >= 8
  )
    return mediumPass;

  if (letterSymbolAndDigitsPattern.test(password) && password.length >= 8)
    return strongPass;

  return initialState;
};

export { checkPasswordStrength };
