import SatangNum from './SatangNum';
import IsValidText from './IsValidText';
import { padWithLeadingZeros, removeLeadingingZeros } from '../snippet/.';
import THAINUMBERWORDS from '../const/array/THAINUMBERWORDS';
import { FULLBAHT, BAHT, SATANG, MILLION, ZERO } from '../const/.';
import BulkReplace from './BulkReplace';

export default (BT, error = `Invalid String`) => {
  if (!BT) return undefined;

  if (BT.endsWith(BAHT)) BT = `${BT}${FULLBAHT}`;
  if (!BT.endsWith(SATANG) && !BT.endsWith(FULLBAHT)) return error;

  const [moneyBaht, moneySatang] = BT.split(BAHT);

  if (moneyBaht.endsWith(SATANG) && !moneySatang) {
    return `0.${SatangNum(moneyBaht.replace(SATANG, ''))}`;
  }

  const retSatang = SatangNum(moneySatang.replace(SATANG, ''));
  if (!retSatang) return error;

  if (!IsValidText(moneyBaht)) return error;

  const moneyBahts = [];
  const millions = moneyBaht.split(MILLION).toReversed();

  for (const million of millions) {
    if (SatangNum(million)) {
      moneyBahts.push(padWithLeadingZeros(SatangNum(million), 6));
      continue;
    }

    const THUNDREDTHOUSAND = /(หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า)?แสน/.exec(million)?.at(1) || ZERO;
    const VHUNDREDTHOUSAND = THAINUMBERWORDS.indexOf(THUNDREDTHOUSAND);

    const TTENTHOUSAND = /(หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า)?หมื่น/.exec(million)?.at(1) || ZERO;
    const VTENTHOUSAND = THAINUMBERWORDS.indexOf(TTENTHOUSAND);

    const TTHOUSAND = /(หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า)?พัน/.exec(million)?.at(1) || ZERO;
    const VTHOUSAND = THAINUMBERWORDS.indexOf(TTHOUSAND);

    const THUNDRED = /(หนึ่ง|สอง|สาม|สี่|ห้า|หก|เจ็ด|แปด|เก้า)?ร้อย/.exec(million)?.at(1) || ZERO;
    const VHUNDRED = THAINUMBERWORDS.indexOf(THUNDRED);

    const VL =
      SatangNum(
        BulkReplace(million, '', /.*แสน/, /.*หมื่น/, /.*พัน/, /.*ร้อย/)
      ) || `00`;

    moneyBahts.push(
      padWithLeadingZeros(
        `${VHUNDREDTHOUSAND}${VTENTHOUSAND}${VTHOUSAND}${VHUNDRED}${VL}`,
        6
      )
    );
  }

  return `${removeLeadingingZeros(moneyBahts.toReversed().join(""))}.${SatangNum(
    moneySatang.replace(SATANG, '')
  )}`;
};
