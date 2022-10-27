const recommendData = require('./recommend');

const shopcartData = recommendData.filter(item => item.addcart == true);

module.exports = shopcartData;