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

    type Query {
        hello: String
        actualTime: Date
        loggedUser: User
    }
`;

const resolvers = {
    User: {
        salary: (user) => user.realSalary,
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
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
}
);