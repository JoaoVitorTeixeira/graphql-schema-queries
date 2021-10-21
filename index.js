const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date
    type Query {
        hello: String
        actualTime: Date
    }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        actualTime: () => new Date()
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
}
);