import NEG from './NEG';
import BF from './BF';
import THBText from 'thai-baht-text';

export default (money, ed = false, allow_neg = false) => {
  if (!money) return undefined;

  if (typeof money === "number") {
    return money < 0 ? `ลบ${THBText(-money)}` : THBText(money);
  }

  if (typeof money === "string") {
    return allow_neg ? NEG(money, ed) : BF(money, ed);
  }

  return undefined;
};
