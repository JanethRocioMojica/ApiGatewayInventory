const buyResolver = {
    Query: {
        buyByProductId: (_, {userId , productId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.inventoryAPI.buyByProductId(productId)
            else
                return null
        }
    },
    Mutation: {
        createBuy: (_, {userId ,buy }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.inventoryAPI.createBuy(buy)
            else
                return null
        }

    }
};


module.exports = buyResolver;