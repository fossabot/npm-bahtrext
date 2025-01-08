module.exports = (money) => {
  const match = money.match(/(\d*)(\.\d+)?/);
  if (!match) return [money, "", ""]; // Handle case where match fails

  let [moneyFull, moneyInt, moneyFrac] = match;
  moneyFrac = moneyFrac ? moneyFrac.replace(/^\./, "") : "";

  return [moneyFull, moneyInt, moneyFrac];
};
