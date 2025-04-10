import tryCatch from 'try-catch';
import {
  VERSION,
  THAI2ARABICNumerals,
  large_numbers,
  BAHT,
  THB,
} from './const/index.js';
import {
  MoneyLaundering,
  IsMoneyValidate,
  PrintBaht,
  PrintSatangs,
  BahtText,
  BT,
  BF,
  BulkBahtText,
  NumText,
  SatangNum,
  IsValidText,
  TB,
  IsValidTB,
  NEG,
  ABT,
  repeat,
  LNBT,
  OB,
  SEP,
} from './function/index.js';

import { removeLeadingingZeros, LeadingSpecialOneToOne } from './snippet/index.js';

class BR {
  #num;
  constructor(num) {
    this.#num = num || "";
    this.version = VERSION;
  }
  
  set = (num) => {
    this.#num = IsMoneyValidate(num) ? num : TB(num);
  }
  
  static version = this.version;
  
  auto = () => ABT(this.#num);
  text = () => BT(this.#num);
  flex = () => BF(this.#num);
  neg = () => NEG(this.#num);
  bahttext = () => BahtText(this.#num);
  bathtext = () => `You spelled it wrong.`;
  clean = () => MoneyLaundering(this.#num);
  currency = () => THB.format(this.clean());
  
  printBaht() {
    const [error, result] = tryCatch(() => this.auto().replace(/บาท.+/g, BAHT));
    return result;
  }
  
  printBath = () => `You spelled it wrong.`;
  
  printStangs() {
    const [error, result] = tryCatch(() => this.auto().replace(/.+บาท/g, ``));
    return result;
  }
  
  trim = () => removeLeadingingZeros(this.#num);
  isValid = () => IsMoneyValidate(this.#num);
}
export default BR;
export {
  MoneyLaundering,
  removeLeadingingZeros,
  IsMoneyValidate,
  PrintBaht,
  PrintSatangs,
  BahtText,
  BT,
  BulkBahtText,
  NumText,
  SatangNum,
  TB,
  IsValidTB,
  THAI2ARABICNumerals,
  BF,
  ABT,
  large_numbers,
  LNBT,
  LeadingSpecialOneToOne,
  OB,
  IsValidText,
  repeat,
  SEP,
  NEG,
  VERSION,
};
