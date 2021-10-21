const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date

    type User {
        id: ID
        name: String!
        email: String!
        age: Int
        salary: Float
        vip: Boolean
    }

    type Product {
        id: ID
        name: String!
        price: Float!
        discount: Float
        priceWithDiscount: Float
    }

    type Query {
        hello: String
        actualTime: Date
        loggedUser: User
        featuredProduct: Product
    }
`;

const resolvers = {
    User: {
        salary: (user) => user.realSalary,
    },
    Product: {
        priceWithDiscount: (product) => product.price - product.discount,
    },
    Query: {
        hello: () => 'Hello world!',
        actualTime: () => new Date(),
        loggedUser: () => {
            return {
                id: '1',
                name: 'John Doe',
                email: 'user@email.com',
                age: 30,
                realSalary: 1000.00,
                vip: true
            }
        },
        featuredProduct: () => {
            return {
                id: '1',
                name: 'Product 1',
                price: 100.00,
                discount: 0.10,
            }
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
}
);