import BahtText from './BahtTextv2';
import BF from "./BF"
import distinct from '../snippet/distinct';
import defaultBulkBahtTextPat from '../const/defaultConfig/BulkBahtTextPat';
import InvalidType from "../const/error/InvalidType"
import ed from '../const/defaultConfig/ed';

export default (
  str,
  options = {
    pat: defaultBulkBahtTextPat,
    ed,
  }
) => {
  if (typeof str !== "string") return InvalidType;
  if (!str) return '';

  const { pat, ed } = options;

  const matches = str.match(pat);
  if (!matches) return str;

  for (const match of distinct(matches)) {
    let number = match;
    // If match includes "บาท", extract the number part
    const numMatch = match.match(/[\d,]+(\.\d+)?/);
    if (numMatch) number = numMatch[0];
    str = str.replace(RegExp(match, 'g'), BF(number, ed));
  }

  return str;
};
