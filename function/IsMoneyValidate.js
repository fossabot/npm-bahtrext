import { SPLITPATTERN } from '../const/.';

export default (money, rounding = '') => {
  if (typeof money !== 'string' && typeof money !== 'number') {
    return false;
  }
  return rounding === `` ? SPLITPATTERN.test(String(money)) : /\d*(\.\d+)?/.test(String(money));
};
