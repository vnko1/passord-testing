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

const onlyLettersPattern = /^[a-zA-Z]+$/;
const onlyDigitsPattern = /^\d+$/;
const onlySymbolsPattern = /^[-!$%@#%&^&*()_+|~=`{}[\]:";'<>?,./]+$/;

const digitsAndLettersPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
const digitsAndSymbolsPattern =
  /^(?=.*[0-9])(?=.*[-!$%@#%&^&*()_+|~=`{}[\]:";'<>?,./])([0-9-!$%@#%&^&*()_+|~=`{}[\]:";'<>?,./]+)$/;
const lettersAndSymbolsPattern =
  /^(?=.*[a-zA-Z])(?=.*[-!$%@#%&^&*()_+|~=`{}[\]:";'<>?,./])([a-zA-Z-!$%@#%&^&*()_+|~=`{}[\]:";'<>?,./]+)$/;

const letterSymbolAndDigitsPattern =
  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[-!$%@#%&^&*()_+|~=`{}[\]:";'<>?,./])([0-9a-zA-Z-!$%@#%&^&*()_+|~=`{}[\]:";'<>?,./]+)$/;

export {
  initialState,
  passStrengthColors,
  onlyLettersPattern,
  onlyDigitsPattern,
  onlySymbolsPattern,
  digitsAndLettersPattern,
  digitsAndSymbolsPattern,
  lettersAndSymbolsPattern,
  letterSymbolAndDigitsPattern,
};
