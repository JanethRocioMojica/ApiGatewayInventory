const sellResolver = {
    Query: {
        sellByProductId: (_, { userId, productId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.inventoryAPI.sellByProductId(productId)
            else
                return null
        }
    },
    Mutation: {
        createSell: (_, {userId, sell }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.inventoryAPI.createSell(sell)
            else
                return null
        }

    }
};


module.exports = sellResolver;