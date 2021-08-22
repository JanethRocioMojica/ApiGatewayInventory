const sellResolver = {
    Query: {
        sellByProductId: (_, { productId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.inventoryAPI.sellByProductId(productId)
            else
                return null
        }
    },
    Mutation: {
        createSell: (_, { sell }, { dataSources, userIdToken }) => {
            if (transaction.userIdOrigin == userIdToken)
                return dataSources.inventoryAPI.createSell(sell)
            else
                return null
        }

    }
};


module.exports = sellResolver;