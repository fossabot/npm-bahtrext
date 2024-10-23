import RepEmt from "../function/RepEmt.mjs";
import LeadingZerosRegex from "../const/regex/LeadingZerosRegex.mjs";
const removeLeadingZeros = (string) => RepEmt(string, LeadingZerosRegex);
export default removeLeadingZeros;