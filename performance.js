const THBText = require("thai-baht-text");
const BT = require("./function/BT");

const convertToThaiBahtText = async (amounts) => {
  for (const amount of amounts) {
    THBText(amount);
  }
};

const convertToBT = async (amounts) => {
  for (const amount of amounts) {
    BT(amount);
  }
};

const generatePerformanceArrays = (start, end, step) => {
  const numericArray = [];
  const stringArray = [];
  for (let i = start; i <= end; i += step) {
    numericArray.push(i);
    stringArray.push(`${i}`);
  }
  return { numericArray, stringArray };
};

const { numericArray, stringArray } = generatePerformanceArrays(1, 100000, 0.01);

const measurePerformance = async (label, func, data) => {
  const start = performance.now();
  await func(data);
  const end = performance.now();
  console.log(`${label} ${end - start} ms`);
};

(async () => {
  await measurePerformance('BahtRext', convertToBT, stringArray);
  await measurePerformance(
    "thai-baht-text",
    convertToThaiBahtText,
    numericArray
  );
})();