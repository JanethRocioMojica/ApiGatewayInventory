const { gql } = require('apollo-server');

const sellTypeDefs = gql`
    type Sell {
        id: String!
        productIdSell: String
        value: Int
        date: String
    }
    
    input SellInput {
        productIdSell: String
        value: Int
    }

    extend type Query {
        sellByProductId(userId: String!, productId: String!): [Sell]
    }
    
    type Mutation {
        createSell(userId: String!, sell: SellInput!): Sell
    }
`;

module.exports = sellTypeDefs;