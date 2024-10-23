import RepEmt from "./RepEmt.mjs";
const splitIntFrac = (money) => {
  const match = money.match(/(\d*)(\.\d+)?/);
  let [moneyFull, moneyInt, moneyFrac] = match;
  moneyFrac === undefined
    ? (moneyFrac = "")
    : (moneyFrac = RepEmt(moneyFrac, /^\./));
  return [moneyFull, moneyInt, moneyFrac];
};
export default splitIntFrac;