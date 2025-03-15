const ABT = require(`./ABT`);
const { ONETONINE, REVERSETHAIDIGITWORDS, MILLION, SPECIALONE, SPECIALTWO, BAHT, FULLBAHT } = require(`../const`);
const applyReplacements = require(`./applyReplacements`);

module.exports = (num, separator = `-`) => {
  let ret = ABT(num, true);

  const replaceWithSeparator = (arr) => {
    arr.forEach((i) => {
      ret = ret.replace(new RegExp(i, `g`), `${i}${separator}`);
    });
  };

  replaceWithSeparator(ONETONINE);
  replaceWithSeparator(REVERSETHAIDIGITWORDS.filter((x) => x !== ''));

  ret = applyReplacements(ret, [MILLION, SPECIALONE, SPECIALTWO], separator)
    .replace(`${BAHT}${FULLBAHT}`, "")
    .replace(BAHT, `${BAHT}${separator}`)
    .replace(new RegExp(`${separator}$`), "");

  return ret;
};
