import THAINUMBERWORDS from '../const/array/THAINUMBERWORDS.js';

export default (str, arr = THAINUMBERWORDS, flag = `g`) => {
  if (!str) return undefined;
  if (typeof str !== "string") return `Invalid Type`;

  return Object.entries(arr).reduce(
    (acc, [key, value]) => acc.replace(new RegExp(key, flag), value),
    str
  );
};
