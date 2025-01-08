const THAI2ARABICNumerals = require(`../const/array/THAI2ARABICNumerals`);
const BT = require(`./BT`);

module.exports = (
  flexmoney,
  ed = false,
  InvalidType = `Invalid Type`,
  OL = false
) => {
  if (!flexmoney) return undefined;
  if (typeof flexmoney !== "string") return InvalidType;

  let money = THAI2ARABICNumerals.reduce(
    (acc, { th, a }) => acc.replace(new RegExp(th, `g`), a),
    flexmoney
  );

  return BT(money, ed, OL);
};
