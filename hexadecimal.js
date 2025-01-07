const hexadecRegex = require("./const/regex/hexadecRegex");
const op = require(`operation-strint`);

const isHex = (money) => {
  if (typeof money !== `string`) return undefined;
  if (/__/i.test(money)) return false;
  money = money.replace(/(?<=[\da-f])_(?=[\da-f])/gi, "");
  return hexadecRegex.test(money);
};

const toDec = (atof) => {
    let retVal = atof;
    switch (atof.toLowerCase()) {
        case 'a':
            retVal = `10`
            break;
        case 'b':
            retVal = `11`
            break;
        case 'c':
            retVal = `12`
            break;
        case 'd':
            retVal = `13`
            break;
        case 'e':
            retVal = `14`
            break;
        case 'f':
            retVal = `15`
            break;
    }
    return retVal
}

const toHex = (num) => {
  let val = `0`;
  if (!isHex(num)) return num;
  num = num.replace(/^0x/i, ``);
  let pos = -1;
  for (let i of num.split("").reverse()) {
    let thispos_val = op.multiply(
      op.pow(`16`, `${pos + 1}`),
      toDec(i)
    );
    val = op.sum(val, thispos_val);
    if (val == "") val = "0";
    pos++;
  }
  return val;
};

module.exports = {
  isHex,
  toHex,
};
