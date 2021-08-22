//Se llama al typedef (esquema) de cada submodulo
const productTypeDefs = require('./product_type_def');
const buyTypeDefs = require('./buy_type_def');
const sellTypeDefs = require('./sell_type_def');
const usersTypeDefs = require('./users_type_defs');

//Se unen
const schemasArrays = [productTypeDefs, buyTypeDefs, sellTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays;