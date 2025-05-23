import { isOctal, toDecOctal as toDec } from '../base/octal';
import { isBin, toDecBin as toBin } from '../base/binary';
import { isHex, toHex } from '../base/hexadecimal';
import MoneyInvalid from '../snippet/MoneyInvalid';
import BahtText from './BahtTextv2';
import INFINITY from '../const/primitive/INFINITY';
import ISINFSTR from "./ISINFSTR";

export default (money, ed = false, OL = false, rounding = '') => {
    if (ISINFSTR(money)) return INFINITY
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

    return rBahtText;
};
