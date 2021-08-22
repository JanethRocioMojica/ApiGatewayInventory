const produtResolver = require('./product_resolver');
const buyResolver = require('./buy_resolver');
const sellResolver = require('./sell_resolver');
const userResolver = require('./users_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(produtResolver, buyResolver, sellResolver, userResolver);

module.exports = resolvers;