const { profiles } = require("../data/db");

module.exports = {
  salary: (user) => user.realSalary,
  profile: (user) => profiles.find((profile) => profile.id === user.profileId),
};
