import ABT from "./ABT.js";

export default (money) => {
  return {
    val: money,
    typ: typeof money,
    err: typeof ABT(money) === "undefined",
    txt: ABT(money),
  };
};
