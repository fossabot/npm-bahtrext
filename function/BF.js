import { THAI2ARABICNumerals } from '../const/.';
import BT from './BT';
import BulkReplace from './BulkReplace';

export default (
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
