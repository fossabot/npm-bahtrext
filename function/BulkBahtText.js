import BahtText from './BahtTextv2';
import IsMatchInSkipsPattern from './IsMatchInSkipsPattern';
import { defaultBulkBahtTextPat, defaultBulkBahtTextSkips } from '../const';

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

    const bahtText = BahtText(match.replace(/[^\d]/g, ""), ed);
    str = str.replace(match, bahtText);
  }

  return str;
};
