module.exports = (ret, patterns, separator) => {
  patterns.forEach((pattern) => {
    ret = ret.replace(new RegExp(pattern, "g"), `${pattern}${separator}`);
  });
  return ret;
};
