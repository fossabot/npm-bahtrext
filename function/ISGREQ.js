module.exports = (value, ...comparisons) =>
  comparisons.every((comp) => value >= comp || value === 0);
