const buyResolver = {
    Query: {
        buyByProductId: (_, { productId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.inventoryAPI.buyByProductId(productId)
            else
                return null
        }
    },
    Mutation: {
        createBuy: (_, { buy }, { dataSources, userIdToken }) => {
            if (transaction.userIdOrigin == userIdToken)
                return dataSources.inventoryAPI.createBuy(buy)
            else
                return null
        }

    }
};


module.exports = buyResolver;