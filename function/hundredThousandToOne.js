const {
  REVERSETHAIDIGITWORDS,
  THAINUMBERWORDS,
  SPECIALONE,
  SPECIALTWO,
  TEN,
} = require(`../const`);

const padWithLeadingZeros = require(`../snippet/padWithLeadingZeros`);

module.exports = (digits, ed = false) => {
  let word = ``;
  const digitspadWithLeadingZeros = padWithLeadingZeros(digits, 6);

  digitspadWithLeadingZeros.split("").forEach((digit, index) => {
    digit = parseInt(digit);
    if (digit !== 0) {
      if (index === 4) {
        word +=
          digit === 2
            ? `${SPECIALTWO}${TEN}`
            : digit === 1
            ? TEN
            : `${THAINUMBERWORDS[digit]}${REVERSETHAIDIGITWORDS[index]}`;
      } else if (index === 5) {
        if (digit === 1 && (ed || digitspadWithLeadingZeros[4] !== "0")) {
          word += SPECIALONE;
        } else {
          word += `${THAINUMBERWORDS[digit]}${REVERSETHAIDIGITWORDS[index]}`;
        }
      } else {
        word += `${THAINUMBERWORDS[digit]}${REVERSETHAIDIGITWORDS[index]}`;
      }
    }
  });

  return word;
};