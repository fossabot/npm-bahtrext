import BahtText from './BahtText.js';
import IsMatchInSkipsPattern from './IsMatchInSkipsPattern.js';
import { defaultBulkBahtTextPat, defaultBulkBahtTextSkips } from '../const/index.js';

export default (
  str,
  pat = defaultBulkBahtTextPat,
  skips = defaultBulkBahtTextSkips,
  ed = false
) => {
  if (typeof str !== "string") return `Invalid Type`;
  if (!str) return null;

  const matches = str.match(pat);
  if (!matches) return str;

  for (const match of matches) {
    if (IsMatchInSkipsPattern(match, skips)) continue;

    const bahtText = BahtText(match.replace(/[^\d]/g, ""), ed)
      .split('"')
      .at(-2);
    str = str.replace(match, bahtText);
  }

  return str;
};
