const large_numbers = require(`../const/array/large_numbers`);
const repeat = require("./repeat");
const BT = require(`./BT`);

module.exports = (nameorpowerof10, d = `1`) => {
  const type = typeof nameorpowerof10;

  if (type === `string`) {
    if (nameorpowerof10 === `Googolplex`) {
      return `Don't Try This`;
    }

    const largeNumber = large_numbers.find((n) => n.name === nameorpowerof10);
    if (!largeNumber || largeNumber.powof10 < 0) return undefined;

    return BT(d + repeat(`0`, [largeNumber.powof10]));
  }

  if (type === `number` && nameorpowerof10 >= 0) {
    return BT(d + repeat(`0`, [nameorpowerof10]));
  }

  return undefined;
};
