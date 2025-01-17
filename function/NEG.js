const negative = require(`../const/primitive/negative`);
const BF = require(`./BF`);

module.exports = (money, ed = false, f = BF, neg = negative) => {
  if (
    /^-([\d๐-๙]*)(\.\[\d๐-๙]{0,2}0*)?/.test(money) &&
    !/^-{2,}/.test(money)
  ) {
    money = money.replace(/^-/, '');
    return `${neg}${f(money, ed)}`;
  }

  return f(money, ed);
};
