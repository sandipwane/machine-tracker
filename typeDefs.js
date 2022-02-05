const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar DateTime

  type Book {
    title: String
    author: String
  }

  type Machine {
    id: ID!
    name: String
    sensors: [Sensor]
    lastKnownPosition: GPSPosition
  }

  type Sensor {
    id: ID!
    name: String
    machine: Machine!
  }

  type Position {
    latitude: Float
    longitude: Float
  }

  type GPSPosition {
    id: ID!
    location: Position
  }

  type SensorDataPoint {
    timestamp: DateTime!
    value: Float!
  }

  type Query {
    hello: String
    books: [Book]
    machines: [Machine!]
    sensorData:[SensorDataPoint]
  }
`;

module.exports = typeDefs;