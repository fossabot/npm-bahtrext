const SPLITPATTERN = require(`../const/regex/SPLITPATTERN`);

module.exports = (money, rounding = '') => {
  try {
    return rounding === `` ? SPLITPATTERN.test(money) : /\d*(\.\d+)?/.test(money);
  } catch (e) {
    return false;
  }
};
