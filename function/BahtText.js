import splitIntFrac from './splitIntFrac.js';
import MoneyLaundering from './MoneyLaundering.js';
import PrintBaht from './PrintBaht.js';
import IsMoneyValidate from './IsMoneyValidate.js';
import PrintSatangs from './PrintSatangs.js';
import MoneyInvalid from '../snippet/MoneyInvalid.js';
import { THAINUMBERWORDS, BAHT, FULLBAHT, THB, READAS } from "../const/."
import { sum } from "operation-strint"

export default (
  money,
  ed = false,
  rounding = ``,
  currencyformat = THB,
  ClErr = MoneyInvalid,
  arrow = READAS,
) => {
  if (!money) return undefined;
  if (typeof money !== "string") return `"Invalid Type"`;

  const cleanedMoney = MoneyLaundering(money);
  if (!IsMoneyValidate(cleanedMoney, rounding) || money === `.`) {
    return ClErr(money);
  }

  const [moneyFull, moneyInt, moneyFrac] = splitIntFrac(cleanedMoney);
  if (moneyFull.match(/^(0*)(\.0*)?$/)) {
    return `${
      currencyformat ? currencyformat.format(moneyFull) : moneyFull
    } ${arrow} "${THAINUMBERWORDS[0]}${BAHT}${FULLBAHT}"`;
  }

  const satang_part = PrintSatangs(moneyFrac, rounding);
  const opsum = sum(satang_part[1], moneyInt === `` ? `0` : moneyInt);
  const new_baht = opsum === `` ? `0` : opsum;

  const baht_part = PrintBaht(new_baht, ed).replace(/^บาท$/, '');
  return `${
    currencyformat ? currencyformat.format(moneyFull) : moneyFull
  } ${arrow} "${baht_part}${satang_part[0]}"`;
};
