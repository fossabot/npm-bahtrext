import BT from "./BT.mjs";
import TB from "./TB.mjs";
import FULLBAHT from "../const/primitive/FULLBAHT.mjs";
import RepEmt from "./RepEmt.mjs";
import globalSpaceRegex from "../const/regex/globalSpaceRegex.mjs";

const IsValidTB = (str) => {
  try {
    if (!str) return undefined
    if (typeof str !== `string`) return false
    const BTTB = RepEmt(BT(TB(str)), globalSpaceRegex);
    return str === RepEmt(BTTB, FULLBAHT);
  }
  catch {
    return false
  }
}

export default IsValidTB;