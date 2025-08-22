import { THAINUMBERWORDS } from "../const";
import DOT from "../const/primitive/DOT";
import TBF from "./TBF";
export default (mrr) => {
    let mrr_word = DOT;
    mrr = mrr.substring(0, 4).replace(/0+$/,'');
    if (!mrr) return "";
    
    mrr = TBF(mrr);
    if (!/^[0-9]{0,4}$/.exec(mrr)) return "";
    
    for (const i of mrr) {
        mrr_word += THAINUMBERWORDS[Number(i)];
    }
    return mrr_word;
}