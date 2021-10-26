const { ApolloServer, gql } = require('apollo-server');

const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@email.com',
        age: 32,
        profileId: 1
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'janeDoe@email.com',
        age: 28,
        realSalary: 1000.45,
        profileId: 2
    },
    {
        id: 3,
        name: 'John Smith',
        email: 'jonhSmith@email.com',
        age: 32,
        profileId: 1,
    }
];

const profiles = [
    {
        id: 1,
        name: 'Admin',
    },
    {
        id: 2,
        name: 'Common',
    }
];

const typeDefs = gql`
    scalar Date

    type User {
        id: ID
        name: String!
        email: String!
        age: Int
        salary: Float
        vip: Boolean
        profile: Profile
    }

    type Profile {
        id: ID
        name: String!
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
        numbersLottery: [Int!]!
        users: [User]
        user(id: ID): User
        profiles: [Profile]!
        profile(id: ID): Profile
    }
`;

const resolvers = {
    User: {
        salary: (user) => user.realSalary,
        profile: (user) => profiles.find(profile => profile.id === user.profileId),
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
        },
        numbersLottery: () => {
            const ascend = (a, b) => a - b;
            return Array(6).fill(0).map(() => Math.floor(Math.random() * 60) + 1).sort(ascend);
        },
        users: () => users,
        user: (_, { id }) => users.find(user => user.id == id),
        profiles: () => profiles,
        profile: (_, { id }) => profiles.find(profile => profile.id == id),
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
}
);