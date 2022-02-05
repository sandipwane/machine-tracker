const db = require('./database');

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello World!';
    },
    books: () => {
      return db.books;
    }
  },
};

module.exports = resolvers;