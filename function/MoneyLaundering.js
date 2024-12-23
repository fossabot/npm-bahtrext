const removeLeadingingZeros = require(`../snippet/removeLeadingingZeros`)
module.exports = (money) => {
  const removeComma = money.replace(/,/g, "");
  const removeCommaAndUnderScore = removeComma.replace(/_/g, "");
  const removeCommaAndUnderScoreAndLeadingingZeros = removeLeadingingZeros(
    removeCommaAndUnderScore
  );
  return removeCommaAndUnderScoreAndLeadingingZeros;
};