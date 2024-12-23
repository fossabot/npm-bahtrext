const ABT = require(`./ABT`)
module.exports = (money) => {
  return {
    val: money,
    typ: typeof money,
    err: typeof ABT(money) === "undefined",
    txt: ABT(money),
  };
};