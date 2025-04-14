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

import {sum, minus, pow} from "operation-strint"

class BR {
  #num;
  #version;
  #log;
  constructor(num) {
    this.#num = num || "";
    this.#version = VERSION;
    this.#log = [num];
  }
  
  set (num) {
    this.#version = VERSION;
    if (typeof num === "object") {
      console.error("Invalid type")
      return;
    }
    try {
      this.#num = IsMoneyValidate(num) ? num : TB(num);
      this.#log.push(num);
    } catch (e) {
      console.error(e)
    }
  }

  sum(num) {
    this.#num = sum(`${this.#num}`, `${num}`)
  }
  minus(num) {
    this.#num = minus(`${this.#num}`, `${num}`)
  }
  pow(num) {
    this.#num = pow(`${this.#num}`, `${num}`)
  }
  
  get version() { return this.#version }

  get log() { return this.#log }
  
  get auto() { return ABT(this.#num) }
  get text() { return BT(this.#num) }
  get num() { return TB(this.auto) }
  get flex() { return BF(this.#num) }
  get neg() { return NEG(this.#num) }
  get bahttext() { return BahtText(this.#num) }
  get bathtext() { return `You spelled it wrong.`}
  get clean() { return MoneyLaundering(this.#num) }
  get currency() { return THB.format(this.clean) }
  
  get printBaht() {
    const [_, result] = tryCatch(() => this.auto.replace(/บาท.+/g, BAHT));
    return result;
  }
  
  get printBath() { return `You spelled it wrong.`};
  
  get printStangs() {
    const [_, result] = tryCatch(() => this.auto.replace(/.+บาท/g, ``));
    return result;
  }
  
  get trim() { return removeLeadingingZeros(this.#num) }
  get isValid() { return IsMoneyValidate(this.#num) }
  
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
