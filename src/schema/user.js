module.exports = `
    type User {
        gender: String!
    }

    type Query {
        getUser: [User]
    }
`;
