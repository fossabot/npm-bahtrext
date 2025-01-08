const SPLITPATTERN = require(`../const/regex/SPLITPATTERN`);

module.exports = (money, rounding) => {
  return rounding === `` ? SPLITPATTERN.test(money) : /\d*(\.\d+)?/.test(money);
};
