const removeLeadingingZeros = require(`../snippet/removeLeadingingZeros`);

module.exports = (money) => {
  return removeLeadingingZeros(money.replace(/[, _]/g, ""));
};
