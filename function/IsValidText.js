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

module.exports = (text) => {
  if (typeof text !== `string` || text.replace(/ล้าน/g, "") === "")
    return false;

  const sixdigitswords = text.split(MILLION);

  for (const sixdigitsword of sixdigitswords) {
    if (/สองสิบ|สิบหนึ่ง/.test(sixdigitsword)) return false;

    for (const REVERSETHAIDIGITWORD of REVERSETHAIDIGITWORDS.slice(0, -1)) {
      if (
        (sixdigitsword.match(new RegExp(REVERSETHAIDIGITWORD, "g"))?.length ||
          0) > 1
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
        ((ii.TEN >= ii.HUNDRED &&
          ii.TEN >= ii.THOUSAND &&
          ii.TEN >= ii.TENTHOUSAND &&
          ii.TEN >= ii.HUNDREDTHOUSAND) ||
          ii.TEN === 0) &&
        ((ii.HUNDRED >= ii.THOUSAND &&
          ii.HUNDRED >= ii.TENTHOUSAND &&
          ii.HUNDRED >= ii.HUNDREDTHOUSAND) ||
          ii.HUNDRED === 0) &&
        ((ii.THOUSAND >= ii.TENTHOUSAND && ii.THOUSAND >= ii.HUNDREDTHOUSAND) ||
          ii.THOUSAND === 0) &&
        (ii.TENTHOUSAND >= ii.HUNDREDTHOUSAND || ii.TENTHOUSAND === 0)
      )
    ) {
      return false;
    }

    const eachdigits = sixdigitsword.split(/แสน|หมื่น|พัน|ร้อย|สิบ/);
    for (const digit of eachdigits) {
      if (digit === "") continue;

      if (ONETONINE.indexOf(digit) === -1) {
        if (digit === SPECIALONE || digit === SPECIALTWO) {
          continue;
        }
        return false;
      }
    }
  }

  return true;
};
