const ONE = require(`../const/primitive/ONE`)
module.exports = (money) => money.replace(/^เอ็ด(?=(ล้าน)+)/, ONE);