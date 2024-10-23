import {BT,BF} from "./index.mjs"
import THBText from "thai-baht-text";
const pass = (val) => {
    return
}

const performance = (money_array) => {
  console.time("thai-baht-text");
  for (const money of money_array) {
    // console.log(THBText(money));
    pass(THBText(money));
  }
  console.timeEnd("thai-baht-text");
  return `return`;
};

const performanceBR = (money_array) => {
  console.time("BahtRext");
  for (const money of money_array) {
    // console.log(BahtRext.BF(money));
    pass(BT(money));
  }
  console.timeEnd("BahtRext");
  return `return`;
};

const performance_arr = [];
const performance_arr_s = [];

// for (let i = 1; i <= 1000000; i++) {
for (let i = 1; i <= 10000; i+=0.01) {
  performance_arr.push(i);
  performance_arr_s.push(`${i}`);
}

console.log(performanceBR(performance_arr_s));
console.log(performance(performance_arr));
console.log(`Which one is Faster ?`)