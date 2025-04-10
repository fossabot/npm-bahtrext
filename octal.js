import { octalRegex1, octalRegex2 } from './const/index.js';
import { sum, multiply, pow } from 'operation-strint';

const isOctal = (money) => {
  if (typeof money !== `string`) return undefined;
  if (/__/i.test(money)) return false;

  if (/^0o.+/i.test(money)) {
    money = money.replace(/(?<=[0-7])_(?=[0-7])/g, "");
  } else if (/_/i.test(money)) {
    return false;
  }

  return octalRegex1.test(money) || octalRegex2.test(money);
};

const toDec = (num) => {
  if (!isOctal(num)) return num;
  num = num.replace(/^0+o?/, '');

  return num
    .split("")
    .toReversed()
    .reduce((acc, digit, index) => {
      const thispos_val = multiply(pow(`8`, `${index}`), digit);
      return sum(acc, thispos_val) || "0";
    }, "0");
};

export { isOctal, toDec };
