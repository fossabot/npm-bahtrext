const { FULLBAHT, SATANG } = require(`../const`);
const SatangFirstDigit = require(`./SatangFirstDigit`);
const SatangSecondDigit = require(`./SatangSecondDigit`);
const op = require(`operation-strint`);

module.exports = (satangs, rounding = ``) => {
  if (satangs.match(/^0*$/)) return [FULLBAHT, `0`];
  if (
    (!/^\d{0,2}$/.test(satangs) && rounding === ``) ||
    /[^\d]/.test(satangs)
  ) {
    return [undefined, `0`];
  }

  let first2digit = satangs.slice(0, 2);
  if (rounding === `c`) {
    const therest = satangs.slice(2);
    if (therest.match(/^\d*[1-9]+/) && therest.match(/^\d*$/)) {
      first2digit = op.sum(`1`, first2digit);
    }
    satangs = first2digit;
  }

  if (satangs === `100`) return [FULLBAHT, `1`];

  const satangword = `${SatangFirstDigit(satangs[0])}${SatangSecondDigit(
    satangs
  )}${SATANG}`;
  return [satangword, `0`];
};
