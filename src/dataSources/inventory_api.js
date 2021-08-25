const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class InventoryAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.inventory_api_url;
    }

    async quantityByProductId(productId) {
        return await this.get(`/products/${productId}`);
    }

    async createBuy(buy) {
        buy = new Object(JSON.parse(JSON.stringify(buy)));
        return await this.post('/buys', buy);
    }

    async createSell(sell) {
        sell = new Object(JSON.parse(JSON.stringify(sell)));
        return await this.post('/sells', sell);
    }

    async buyByProductId(productId) {
        return await this.get(`/buys/${productId}`);

    }

    async sellByProductId(productId) {
        return await this.get(`/sells/${productId}`);

    }
}

module.exports = InventoryAPI;