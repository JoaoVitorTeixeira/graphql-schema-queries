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

module.exports = {
    users,
    profiles
};