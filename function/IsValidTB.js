import BT from "./BT.js";
import TB from "./TB.js";
import FULLBAHT from "../const/primitive/FULLBAHT.js";

export default (str) => {
  const BTTB = BT(TB(str)).replace(/\s/g, "");
  return str === BTTB.replace(FULLBAHT, "");
};