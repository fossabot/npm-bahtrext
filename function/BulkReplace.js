module.exports = (str, replacewith = "", ...args) => {
  for (const regex of args) {
    str = str.replace(regex, replacewith);
  }
  return str;
};