const { RESTDataSource } = require('apollo-datasource-rest');

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
class RestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://graphql-server-dev.herokuapp.com/';
  }

  async getUser() {
    const data = [{ gender: 'male' }];
    await wait(300);
    return data;
    // return this.get(`users`);
  }
}

module.exports = RestAPI;
