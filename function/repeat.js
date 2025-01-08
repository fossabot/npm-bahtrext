module.exports = (str, x) => x.reduce((acc, i) => acc.repeat(i), `${str}`);
