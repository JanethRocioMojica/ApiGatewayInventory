const { gql } = require('apollo-server');

const productTypeDefs = gql`
    type Product {
        productId: String!
        quantity: Int
        lastChange: String
    }
    
    type Query {
        quantityByProductId(productId: String!): Product
    }
`;

module.exports = productTypeDefs;
