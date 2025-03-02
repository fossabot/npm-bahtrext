const tryCatch = require("try-catch");
const {
  VERSION,
  THAI2ARABICNumerals,
  large_numbers,
  BAHT,
} = require("./const");
let THB = require(`./const/THB`);

const removeLeadingingZeros = require(`./snippet/removeLeadingingZeros`);

const MoneyLaundering = require(`./function/MoneyLaundering`);
const IsMoneyValidate = require(`./function/IsMoneyValidate`);

const LeadingSpecialOneToOne = require(`./snippet/LeadingSpecialOneToOne`);

const PrintBaht = require(`./function/PrintBaht`);

const PrintSatangs = require(`./function/PrintSatangs`);
const BahtText = require(`./function/BahtText`);

const BT = require(`./function/BT`);
const BF = require(`./function/BF`);

const BulkBahtText = require(`./function/BulkBahtText`);
const NumText = require(`./function/NumText`);
const SatangNum = require(`./function/SatangNum`);
const IsValidText = require(`./function/IsValidText`);
const TB = require(`./function/TB`);
const IsValidTB = require(`./function/IsValidTB`);
const NEG = require(`./function/NEG`);
const ABT = require(`./function/ABT`);
const repeat = require(`./function/repeat`);
const LNBT = require(`./function/LNBT`);
const OB = require(`./function/OB`);
const SEP = require(`./function/SEP`);

class BR {
  constructor(num) {
    this.num = num || "";
    this.version = VERSION;
  }
  static version = this.version;

  auto() {
    return ABT(this.num);
  }

  text() {
    return BT(this.num);
  }

  flex() {
    return BF(this.num);
  }

  neg() {
    return NEG(this.num);
  }

  bahttext() {
    return BahtText(this.num);
  }

  clean() {
    return MoneyLaundering(this.num);
  }

  currency() {
    return THB.format(this.clean());
  }

  printBaht() {
    const [error, result] = tryCatch(() => this.auto().replace(/บาท.+/g, BAHT));
    return result;
  }

  printStangs() {
    const [error, result] = tryCatch(() => this.auto().replace(/.+บาท/g, ``));
    return result;
  }

  trim() {
    return removeLeadingingZeros(this.num);
  }

  isValid() {
    return IsMoneyValidate(this.num);
  }
}

module.exports = {
  BR,
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
};
