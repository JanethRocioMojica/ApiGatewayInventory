const { gql } = require('apollo-server');

const buyTypeDefs = gql`
    type Buy {
        id: String!
        productIdBuy: String
        value: Int
        date: String
    }
    
    input BuyInput {
        productIdBuy: String
        value: Int
    }

    extend type Query {
        buyByProductId(productId: String!): [Buy]
    }
    
    type Mutation {
        createBuy(buy: BuyInput!): Buy
    }
`;

module.exports = buyTypeDefs;