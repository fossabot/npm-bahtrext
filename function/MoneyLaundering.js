const removeLeadingingZeros = require(`../snippet/removeLeadingingZeros`);
const BulkReplace = require(`./BulkReplace`);

module.exports = (money) => {
  return removeLeadingingZeros(BulkReplace(money, "", /[,\s_]/g));
};
