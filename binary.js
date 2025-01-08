const { binaryRegex } = require("./const");
const op = require(`operation-strint`);

const isBin = (money) => {
  if (typeof money !== `string`) return undefined;
  if (/__/i.test(money)) return false;
  money = money.replace(/(?<=[01])_(?=[01])/g, "");
  return binaryRegex.test(money);
};

const toBin = (num) => {
  if (!isBin(num)) return num;
  num = num.replace(/^0b/i, ``);

  return num
    .split("")
    .reverse()
    .reduce((acc, digit, index) => {
      const thispos_val = op.multiply(op.pow(`2`, `${index}`), digit);
      return op.sum(acc, thispos_val) || "0";
    }, "0");
};

module.exports = {
  isBin,
  toBin,
};
