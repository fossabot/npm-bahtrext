import { isOctal, toDecOctal } from '../octal';
import { isBin, toDecBin as toBin } from '../binary';
import MoneyInvalid from '../snippet/MoneyInvalid';
import BahtText from './BahtText';
import { THB, READAS, GoogleSheetsCellCharactersLimit } from '../const/.';
import { isHex, toHex } from '../hexadecimal';

export default (money, ed = false, OL = false, rounding = '') => {
  if (OL && isOctal(money)) {
    money = toDecOctal(money);
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
