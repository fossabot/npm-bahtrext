import BahtText from './BahtTextv2';
import distinct from '../snippet/distinct';
import defaultBulkBahtTextPat from '../const/regex/defaultBulkBahtTextPat';

export default (
  str,
  pat = defaultBulkBahtTextPat,
  ed = false,
) => {
  if (typeof str !== "string") return `Invalid Type`;
  if (!str) return '';

  const matches = str.match(pat);
  if (!matches) return str;

  for (const match of distinct(matches)) {
    let number = match;
    // If match includes "บาท", extract the number part
    const numMatch = match.match(/[\d,]+(\.\d+)?/);
    if (numMatch) number = numMatch[0];
    str = str.replace(RegExp(match, 'g'), BahtText(number, ed));
  }

  return str;
};
