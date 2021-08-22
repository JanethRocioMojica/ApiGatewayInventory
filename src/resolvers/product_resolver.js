const productResolver = {
    Query: {
        quantityByProductId: (_, { productId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.inventoryAPI.quantityByProductId(productId)
            else
                return null
        },
    },
    Mutation: {}
};

module.exports = productResolver;