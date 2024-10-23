import SPLITPATTERN from "../const/regex/SPLITPATTERN.mjs";
import ValidMoneyRegex from "../const/regex/ValidMoneyRegex.mjs";

const IsMoneyValidate = (money, rounding) => {
  if (rounding === ``) return SPLITPATTERN.test(money);
  return ValidMoneyRegex.test(money);
};
export default IsMoneyValidate;