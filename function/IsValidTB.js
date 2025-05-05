import BT from "./BT";
import TB from "./TB";
import FULLBAHT from "../const/primitive/FULLBAHT";

export default (str) => {
  const BTTB = BT(TB(str)).replace(/\s/g, "");
  return str === BTTB.replace(FULLBAHT, "");
};