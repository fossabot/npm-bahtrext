const hexadecRegex = require("./const/regex/hexadecRegex");
const op = require(`operation-strint`);

const isHex = (money) => {
  if (typeof money !== `string`) return undefined;
  if (/__/i.test(money)) return false;
  money = money.replace(/(?<=[\da-f])_(?=[\da-f])/gi, "");
  return hexadecRegex.test(money);
};

const toDec = (atof) => {
  const hexToDecMap = {
    a: "10",
    b: "11",
    c: "12",
    d: "13",
    e: "14",
    f: "15",
  };
  return hexToDecMap[atof.toLowerCase()] || atof;
};

const toHex = (num) => {
  if (!isHex(num)) return num;
  num = num.replace(/^0x/i, ``);

  return num
    .split("")
    .reverse()
    .reduce((acc, digit, index) => {
      const thispos_val = op.multiply(op.pow(`16`, `${index}`), toDec(digit));
      return op.sum(acc, thispos_val) || "0";
    }, `0`);
};

module.exports = {
  isHex,
  toHex,
};
