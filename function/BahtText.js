const splitIntFrac = require(`./splitIntFrac`);
const MoneyLaundering = require(`./MoneyLaundering`);
const PrintBaht = require(`./PrintBaht`);
const IsMoneyValidate = require(`./IsMoneyValidate`);
const PrintSatangs = require(`./PrintSatangs`);
const MoneyInvalid = require("../snippet/MoneyInvalid");
const { THAINUMBERWORDS, BAHT, FULLBAHT, THB, READAS } = require(`../const`);
const { sum } = require(`operation-strint`);

module.exports = (
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
