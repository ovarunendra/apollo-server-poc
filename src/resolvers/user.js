module.exports = {
  Query: {
    getUser: async (_, __, { dataSources }) => dataSources.restAPI.getUser(),
  },
};
