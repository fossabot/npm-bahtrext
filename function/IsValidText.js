const MILLION = require("../const/primitive/MILLION");
const SPECIALONE = require("../const/primitive/SPECIALONE");
const SPECIALTWO = require("../const/primitive/SPECIALTWO");
const HUNDREDTHOUSAND = require("../const/primitive/HUNDREDTHOUSAND");
const TENTHOUSAND = require("../const/primitive/TENTHOUSAND");
const THOUSAND = require("../const/primitive/THOUSAND");
const HUNDRED = require("../const/primitive/HUNDRED");
const TEN = require("../const/primitive/TEN");
const REVERSETHAIDIGITWORDS = require("../const/array/REVERSETHAIDIGITWORDS");
const ONETONINE = require("../const/array/ONETONINE");
const ISGREQ = require("./ISGREQ");

module.exports = (text) => {
  if (typeof text !== `string`) return false;
  if (text.replace(/ล้าน/g, "") === "") return false;
  if (/สองสิบ|สิบหนึ่ง|เอ็ดสิบ/.test(text)) return false;

  for (const sixdigitsword of text.split(MILLION)) {
    for (const REVERSETHAIDIGITWORD of REVERSETHAIDIGITWORDS.slice(0, -1)) {
      if (
        (sixdigitsword.match(RegExp(REVERSETHAIDIGITWORD, "g"))?.length || 0) >
        1
      ) {
        return false;
      }
    }

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
    for (const digit of eachdigits.filter(x => x)) {
      const b = !ONETONINE.includes(digit);
      if (b && [SPECIALONE, SPECIALTWO].includes(digit)) continue 
      if (b) return false;
    }
  }

  return true;
};
