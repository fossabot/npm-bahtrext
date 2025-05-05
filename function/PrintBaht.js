import hundredThousandToOne from './hundredThousandToOne';
import LeadingSpecialOneToOne from '../snippet/LeadingSpecialOneToOne';
import { MILLION, BAHT, LAST6DIGITPATTERN } from '../const';

export default (money, ed = false) => {
  if (!money) return ``;

  const newMoney = [];

  while (money) {
    const selectedupto6digit = money.match(LAST6DIGITPATTERN)[0];
    newMoney.push(`${hundredThousandToOne(selectedupto6digit, ed)}${MILLION}`);
    money = money.replace(LAST6DIGITPATTERN, "");
  }

  return `${LeadingSpecialOneToOne(newMoney.toReversed().join("")).replace(
    /ล้าน$/,
    ``
  )}${BAHT}`;
};
