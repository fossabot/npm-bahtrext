const { isOctal, toDec } = require(`../octal`);
const { isBin, toBin } = require(`../binary`);
const MoneyInvalid = require(`../snippet/MoneyInvalid`);
const BahtText = require("./BahtText");
const {THB, READAS, GoogleSheetsCellCharactersLimit} = require("../const");
const { isHex, toHex } = require("../hexadecimal");

module.exports = (money, ed = false, OL = false, rounding = '') => {
  if (OL && isOctal(money)) {
    money = toDec(money);
  } else if (isBin(money)) {
    money = toBin(money);
  } else if (isHex(money)) {
    money = toHex(money);
  }

  const rBahtText = BahtText(
    money,
    ed,
    rounding,
    THB,
    MoneyInvalid,
    READAS,
  );

  if (!rBahtText) return undefined;

  const retText = rBahtText.split('"').at(-2);
  if (!retText) return undefined;

  if (retText.length > GoogleSheetsCellCharactersLimit) {
    console.warn(
      `Return string exceeds Google Sheets Cell Limit (${GoogleSheetsCellCharactersLimit})`
    );
  }

  return retText;
};
