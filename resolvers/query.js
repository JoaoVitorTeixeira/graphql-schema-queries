const { users, profiles } = require("../data/db");

module.exports = {
  hello: () => "Hello world!",
  actualTime: () => new Date(),
  loggedUser: () => {
    return {
      id: "1",
      name: "John Doe",
      email: "user@email.com",
      age: 30,
      realSalary: 1000.0,
      vip: true,
    };
  },
  featuredProduct: () => {
    return {
      id: "1",
      name: "Product 1",
      price: 100.0,
      discount: 0.1,
    };
  },
  numbersLottery: () => {
    const ascend = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(() => Math.floor(Math.random() * 60) + 1)
      .sort(ascend);
  },
  users: () => users,
  user: (_, { id }) => users.find((user) => user.id == id),
  profiles: () => profiles,
  profile: (_, { id }) => profiles.find((profile) => profile.id == id),
};
