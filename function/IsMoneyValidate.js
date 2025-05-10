import SPLITPATTERN from '../const/regex/SPLITPATTERN';

export default (money, rounding = '') => {
  if (typeof money !== 'string' && typeof money !== 'number') {
    return false;
  }
  return rounding === `` ? SPLITPATTERN.test(String(money)) : /\d*(\.\d+)?|\d+n?/.test(String(money));
};
