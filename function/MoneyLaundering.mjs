import LeadingZerosRegex from "../const/regex/LeadingZerosRegex.mjs";
import Replace from "./Replace.mjs";

const MoneyLaundering = (money) => {
  return Replace(
    money
    , [/,/g]
    , [/_/g]
    , [LeadingZerosRegex]
  );
};
export default MoneyLaundering;