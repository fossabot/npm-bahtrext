import BahtText from "./BahtText.mjs";
import IsMatchInSkipsPattern from "./IsMatchInSkipsPattern.mjs";
import defaultBulkBahtTextPat from "../const/regex/defaultBulkBahtTextPat.mjs";
import defaultBulkBahtTextSkips from "../const/regex/defaultBulkBahtTextSkips.mjs";
import RepEmt from "./RepEmt.mjs";
import globalNotDigits from "../const/regex/globalNotDigits.mjs";

const BulkBahtText = (
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
    str = str.replace(
      match,
      BahtText(RepEmt(match, globalNotDigits)).split('"').at(-2),
      ed
    );
  }
  return str;
};
export default BulkBahtText;