const THAINUMBERWORDS = require(`../const/array/THAINUMBERWORDS`);

module.exports = (str, arr = THAINUMBERWORDS, flag = `g`) => {
  if (!str) return undefined;
  if (typeof str !== "string") return `Invalid Type`;

  return Object.entries(arr).reduce(
    (acc, [key, value]) => acc.replace(new RegExp(key, flag), value),
    str
  );
};
