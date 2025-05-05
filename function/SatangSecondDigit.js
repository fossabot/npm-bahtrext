import { SPECIALONE, THAINUMBERWORDS } from "../const"

export default (digit) => {
  if (digit[1] === undefined || digit[1] === "0") return "";
  if (digit[0] !== "0" && digit[1] === "1") return SPECIALONE;

  return `${THAINUMBERWORDS[parseInt(digit[1])]}`;
};
