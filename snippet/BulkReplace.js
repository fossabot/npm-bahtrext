export default (str, replacewith = "", ...replaces) => {
  for (const regex of replaces) {
    str = str.replace(regex, replacewith);
  }
  return str;
};
