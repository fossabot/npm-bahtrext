const NEG = require(`./NEG`);
const BF = require(`./BF`);
// const MAX_SAFE_INTEGER = require("../const/primitive/MAX_SAFE_INTEGER");
const THBText = require("thai-baht-text");

module.exports = (money, ed = false, allow_neg = false) => {
  if (!money) return undefined;

  if (typeof money === "number") {
    // if (money > MAX_SAFE_INTEGER) {
    //   console.warn(`Consider using BahtRext`);
    // }
    return money < 0 ? `ลบ${THBText(-money)}` : THBText(money);
  }

  if (typeof money === "string") {
    return allow_neg ? NEG(money, ed) : BF(money, ed);
  }

  return undefined;
};
