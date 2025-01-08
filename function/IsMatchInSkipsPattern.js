module.exports = (match, skips) => skips.some((skip) => skip.test(match));
