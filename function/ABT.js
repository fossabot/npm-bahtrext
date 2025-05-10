import NEG from './NEG';
import BF from './BF';
import iTHBText from './iTHBText';

export default (money, ed = false, allow_neg = false) => {
  if (!money) return undefined;

  if (["number", "bigint"].includes(typeof money)) {
    return money < 0 ? `ลบ${iTHBText(-money)}` : iTHBText(money);
  }

  if (typeof money === "string") {
    return allow_neg ? NEG(money, ed) : BF(money, ed);
  }

  return undefined;
};
