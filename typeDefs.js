const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar DateTime

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
    id: ID!
    timestamp: DateTime!
    value: Float!
    sensorId: Sensor
  }

  input MachineWhereUniqInput {
    id: ID
  }

  type Query {
    machines: [Machine!]
    machine(where: MachineWhereUniqInput!): Machine
    sensorData(id: ID!, from: DateTime!, to: DateTime!): [SensorDataPoint]
  }
`;

module.exports = typeDefs;