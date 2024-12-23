const BT = require(`./BT`)
const TB = require(`./TB`)
const FULLBAHT = require(`../const/primitive/FULLBAHT`)
module.exports = (str) => {
  const BTTB = BT(TB(str)).replace(/\s/g, "");
  return str === BTTB.replace(FULLBAHT, "");
};