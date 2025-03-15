const THAI2ARABICNumerals = require(`../const/array/THAI2ARABICNumerals`);
const BT = require(`./BT`);
const BulkReplace = require(`./BulkReplace`);

module.exports = (
  flexmoney,
  ed = false,
  InvalidType = `Invalid Type`,
  OL = false
) => {
  if (!flexmoney) return undefined;
  if (typeof flexmoney !== "string") return InvalidType;

  let money = THAI2ARABICNumerals.reduce(
    (acc, { th, a }) => BulkReplace(acc, a, new RegExp(th, `g`)),
    flexmoney
  );

  return BT(money, ed, OL);
};
