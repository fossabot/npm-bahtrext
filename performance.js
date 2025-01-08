const pass = (val) => {
  return;
};

const performance = async (money_array) => {
  const THBText = require("thai-baht-text");
  console.time("thai-baht-text");

  for (const money of money_array) {
    // console.log(THBText(money));
    await pass(THBText(money));
  }

  console.timeEnd("thai-baht-text");
  return `return`;
};

const performanceBR = async (money_array) => {
  const BahtRext = require("./index");
  console.time("BahtRext");

  for (const money of money_array) {
    // console.log(BahtRext.BF(money));
    await pass(BahtRext.BF(money));
  }

  console.timeEnd("BahtRext");
  return `return`;
};

const performance_arr = [];
const performance_arr_s = [];

const generatePerformanceArrays = (start, end, step) => {
  for (let i = start; i <= end; i += step) {
    performance_arr.push(i);
    performance_arr_s.push(`${i}`);
  }
};

generatePerformanceArrays(1, 10000, 0.01);

(async () => {
  console.log(await performanceBR(performance_arr_s));
  console.log(await performance(performance_arr));
})();
