import ABT from './ABT';
import applyReplacements from './applyReplacements';
import { ONETONINE, REVERSETHAIDIGITWORDS, MILLION, SPECIALONE, SPECIALTWO, BAHT, FULLBAHT } from "../const/.";

export default (num, separator = '-') => {
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
