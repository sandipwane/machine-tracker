const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs =  require('./typeDefs');
const resolvers = require('./resolvers');

const mocks = {
  Machine: () => {
    return { name: () => "Machine Name" };
  },
  Sensor: () => {
    return { name: () => "Sensor Name" };
  },
  Position: () => {
    return { latitude: () => 45.516, longitude: () => -122.636 };
  },
  DateTime: () => {
    return new Date();
  }
};

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/api' });
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
  });
}

startServer()
