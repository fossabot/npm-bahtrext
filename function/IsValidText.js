import {
  MILLION,
  SPECIALONE,
  SPECIALTWO,
  HUNDREDTHOUSAND,
  TENTHOUSAND,
  THOUSAND,
  HUNDRED,
  TEN,
  REVERSETHAIDIGITWORDS,
  ONETONINE,
} from "../const/index.js"

import ISGREQ from "./ISGREQ.js"

export default (text) => {
  if (typeof text !== `string`) return false;
  if (text.replace(/ล้าน/g, "") === "") return false;
  if (/สองสิบ|สิบหนึ่ง|เอ็ดสิบ/.test(text)) return false;

  for (const sixdigitsword of text.split(MILLION)) {
    if (REVERSETHAIDIGITWORDS.slice(0, -1).some(word => sixdigitsword.split(word).length > 2)) return false

    const indices = {
      HUNDREDTHOUSAND: sixdigitsword.indexOf(HUNDREDTHOUSAND),
      TENTHOUSAND: sixdigitsword.indexOf(TENTHOUSAND),
      THOUSAND: sixdigitsword.indexOf(THOUSAND),
      HUNDRED: sixdigitsword.indexOf(HUNDRED),
      TEN: sixdigitsword.indexOf(TEN),
    };

    const ii = Object.fromEntries(
      Object.entries(indices).map(([key, value]) => [
        key,
        value === -1 ? 0 : value,
      ])
    );

    if (
      !(
        ISGREQ(
          ii.TEN,
          ii.HUNDRED,
          ii.THOUSAND,
          ii.TENTHOUSAND,
          ii.HUNDREDTHOUSAND
        ) &&
        ISGREQ(ii.HUNDRED, ii.THOUSAND, ii.TENTHOUSAND, ii.HUNDREDTHOUSAND) &&
        ISGREQ(ii.THOUSAND, ii.TENTHOUSAND, ii.HUNDREDTHOUSAND) &&
        (ii.TENTHOUSAND >= ii.HUNDREDTHOUSAND || ii.TENTHOUSAND === 0)
      )
    )
      return false;

    const eachdigits = sixdigitsword.split(/แสน|หมื่น|พัน|ร้อย|สิบ/);
    for (const digit of eachdigits.filter((x) => x)) {
      const b = !ONETONINE.includes(digit);
      if (b && [SPECIALONE, SPECIALTWO].includes(digit)) continue;
      if (b) return false;
    }
  }

  return true;
};
