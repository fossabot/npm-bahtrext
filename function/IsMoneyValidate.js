import { SPLITPATTERN } from '../const/index.js';

export default (money, rounding = '') => {
  try {
    return rounding === `` ? SPLITPATTERN.test(money) : /\d*(\.\d+)?/.test(money);
  } catch (e) {
    return false;
  }
};
