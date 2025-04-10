import { binaryRegex } from './const/index.js';
import { sum, multiply, pow } from 'operation-strint';

const isBin = (money) => {
  if (typeof money !== `string`) return undefined;
  if (/__/i.test(money)) return false;
  money = money.replace(/(?<=[01])_(?=[01])/g, "");
  return binaryRegex.test(money);
};

const toBin = (num) => {
  if (!isBin(num)) return num;
  num = num.replace(/^0b/i, '');

  return num
    .split("")
    .toReversed()
    .reduce((acc, digit, index) => {
      const thispos_val = multiply(pow(`2`, `${index}`), digit);
      return sum(acc, thispos_val) || "0";
    }, "0");
};

export { isBin, toBin };
