import { TEN, SPECIALTWO, THAINUMBERWORDS } from "../const/.";

export default (digit) => {
  if (digit === `0`) return ``;
  if (digit === `1`) return `${TEN}`;
  if (digit === `2`) return `${SPECIALTWO}${TEN}`;

  return `${THAINUMBERWORDS[parseInt(digit)]}${TEN}`;
};
