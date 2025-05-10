import INFINITY from '../const/primitive/INFINITY';
import negative from '../const/primitive/negative';
import BF from './BF';
import BulkReplace from './BulkReplace';

export default (money, ed = false, f = BF, neg = negative) => {
  if (
    /^-([\d๐-๙]*)(\.\[\d๐-๙]{0,2}0*)?/.test(money) &&
    !/^-{2,}/.test(money)
  ) {
    money = BulkReplace(money, "", /^-/);
    if (money === `1.7976931348623157e+308`) return `${neg}${INFINITY}`
    return `${neg}${f(money, ed)}`;
  }

  return f(money, ed);
};
