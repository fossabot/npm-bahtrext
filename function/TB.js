const SatangNum = require(`./SatangNum`);
const padWithLeadingZeros = require(`../snippet/padWithLeadingZeros`);
const removeLeadingingZeros = require(`../snippet/removeLeadingingZeros`);
const IsValidText = require(`./IsValidText`);
const FULLBAHT = require("../const/primitive/FULLBAHT");
const BAHT = require("../const/primitive/BAHT");
const ZERO = require("../const/primitive/ZERO");
const MILLION = require("../const/primitive/MILLION");
const SATANG = require("../const/primitive/SATANG");
const THAINUMBERWORDS = require("../const/array/THAINUMBERWORDS");

module.exports = (BT, error = `Invalid String`) => {
  if (!BT) return undefined;

  if (/บาท$/.test(BT)) BT = `${BT}${FULLBAHT}`;
  if (!/สตางค์$/.test(BT) && !/ถ้วน$/.test(BT)) return error;

  const [moneyBaht, moneySatang] = BT.split(BAHT);

  if (/สตางค์$/.test(moneyBaht) && !moneySatang) {
    return `0.${SatangNum(moneyBaht.replace(SATANG, ``))}`;
  }

  const retSatang = SatangNum(moneySatang.replace(SATANG, ``));
  if (!retSatang) return error;

  if (!IsValidText(moneyBaht)) return error;

  const moneyBahts = [];
  const millions = moneyBaht.split(MILLION).reverse();

  for (const million of millions) {
    if (SatangNum(million)) {
      moneyBahts.push(padWithLeadingZeros(SatangNum(million), 6));
      continue;
    }

    const THUNDREDTHOUSAND =
      million.match(/(หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า)?แสน/)?.at(1) ||
      ZERO;
    const VHUNDREDTHOUSAND = THAINUMBERWORDS.indexOf(THUNDREDTHOUSAND);

    const TTENTHOUSAND =
      million.match(/(หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า)?หมื่น/)?.at(1) ||
      ZERO;
    const VTENTHOUSAND = THAINUMBERWORDS.indexOf(TTENTHOUSAND);

    const TTHOUSAND =
      million.match(/(หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า)?พัน/)?.at(1) ||
      ZERO;
    const VTHOUSAND = THAINUMBERWORDS.indexOf(TTHOUSAND);

    const THUNDRED =
      million.match(/(หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า)?ร้อย/)?.at(1) ||
      ZERO;
    const VHUNDRED = THAINUMBERWORDS.indexOf(THUNDRED);

    const VL =
      SatangNum(
        million
          .replace(/.+แสน/, ``)
          .replace(/.+หมื่น/, ``)
          .replace(/.+พัน/, ``)
          .replace(/.+ร้อย/, ``)
      ) || `00`;

    moneyBahts.push(
      padWithLeadingZeros(
        `${VHUNDREDTHOUSAND}${VTENTHOUSAND}${VTHOUSAND}${VHUNDRED}${VL}`,
        6
      )
    );
  }

  return `${removeLeadingingZeros(moneyBahts.reverse().join(""))}.${SatangNum(
    moneySatang.replace(SATANG, ``)
  )}`;
};
