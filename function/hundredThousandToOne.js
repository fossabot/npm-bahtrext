const {
  REVERSETHAIDIGITWORDS,
  THAINUMBERWORDS,
  SPECIALONE,
  SPECIALTWO,
  TEN,
} = require(`../const`);

const padWithLeadingZeros = require(`../snippet/padWithLeadingZeros`);

const getDigit = (d) => {
  let w = "";
  switch (d) {
    case 2:
      w += `${SPECIALTWO}${TEN}`;
      break;
    case 1:
      w += TEN;
      break;
    default:
      w += `${THAINUMBERWORDS[d]}${REVERSETHAIDIGITWORDS[4]}`;
  }
  return w;
};

module.exports = (digits, ed = false) => {
  let w = ``;
  const digitspadWithLeadingZeros = padWithLeadingZeros(digits, 6);
  digitspadWithLeadingZeros.split("").forEach((d, i) => {
    d = parseInt(d);
    if (!d) return;
    if (i === 4) return w += getDigit(d);
    if (i === 5) {
      if (d === 1 && (ed || digitspadWithLeadingZeros[4] !== "0")) return w += SPECIALONE;
      return w += `${THAINUMBERWORDS[d]}${REVERSETHAIDIGITWORDS[i]}`;
    }
    return w += `${THAINUMBERWORDS[d]}${REVERSETHAIDIGITWORDS[i]}`;
  });
  return w;
};
