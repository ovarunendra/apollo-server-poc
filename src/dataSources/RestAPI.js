const { RESTDataSource } = require('apollo-datasource-rest');

class RestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://graphql-server-dev.herokuapp.com/';
  }

  async getUser() {
    return this.get(`users`);
  }
}

module.exports = RestAPI;
