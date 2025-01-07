const { binaryRegex } = require("./const");
const op = require(`operation-strint`);

const isBin = (money) => {
  if (typeof money !== `string`) return undefined;
  if (/__/i.test(money)) return false;
  money = money.replace(/(?<=[01])_(?=[01])/g, "");
  return binaryRegex.test(money);
};

const toBin = (num) => {
  let val = `0`;
  if (!isBin(num)) return num;
  num = num.replace(/^0b/i, ``);
  let pos = -1;
  for (let i of num.split('').reverse()) {
    let thispos_val = op.multiply(op.pow(`2`, `${pos + 1}`), i);
    val = op.sum(val, thispos_val);
    if (val == '') val = '0'
    pos++;
  }
  return val;
};


module.exports = {
  isBin,
  toBin,
};