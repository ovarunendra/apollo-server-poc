const { ApolloServer } = require('apollo-server');
const path = require('path');
const {
  fileLoader,
  mergeTypes,
  mergeResolvers,
} = require('merge-graphql-schemas');
const RestAPI = require('./src/dataSources/RestAPI');

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './src/schema')));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './src/resolvers')),
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    restAPI: new RestAPI(),
  }),
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
