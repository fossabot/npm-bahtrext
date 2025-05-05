import { isOctal, toDecOctal as toDec } from '../base/octal';
import { isBin, toDecBin as toBin } from '../base/binary';
import { isHex, toHex } from '../base/hexadecimal';
import MoneyInvalid from '../snippet/MoneyInvalid';
import BahtText from './BahtTextv2';

export default (money, ed = false, OL = false, rounding = '') => {
    if (OL && isOctal(money)) {
        money = toDec(money);
    } else if (isBin(money)) {
        money = toBin(money);
    } else if (isHex(money)) {
        money = toHex(money);
    }

    const rBahtText = BahtText(
        money,
        ed,
        rounding,
        MoneyInvalid
    );

    if (!rBahtText) return undefined;

    return rBahtText;
};
