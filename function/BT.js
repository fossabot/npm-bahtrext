import { isOctal, toDec } from '../octal.js';
import { isBin, toBin } from '../binary.js';
import MoneyInvalid from '../snippet/MoneyInvalid.js';
import BahtText from './BahtText.js';
import { THB, READAS, GoogleSheetsCellCharactersLimit } from '../const/index.js';
import { isHex, toHex } from '../hexadecimal.js';

export default (money, ed = false, OL = false, rounding = '') => {
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
