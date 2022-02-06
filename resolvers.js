const db = require('./database');
const _ = require('lodash');
const { GraphQLDateTime } = require('graphql-iso-date')

const getAllSenors = () => {
  const sensors = _.cloneDeep(db.sensors);
  return _.map(sensors, (sensor) => {
    const machine = _.find(db.machines, { id: sensor.machine });
    sensor.machine = machine;
    return sensor;
  });
};

const getAllMachines = () => {
  const machines = _.cloneDeep(db.machines);
  const allSensors = getAllSenors();
  return _.map(machines, (machine) => {
    const expandedSensors = _.map(machine.sensors, (sensorId) => {
      return _.find(allSensors, { id: sensorId });
    });
    const expandedGpsPositions =  _.find(db.gpsPositions, { id: machine.lastKnownPosition });

    machine.sensors = expandedSensors;
    machine.lastKnownPosition = expandedGpsPositions;
    return machine;
  });
};


const resolvers = {
  Query: {
    machines: () => {
      return db.machines
    },
  },
  Machine: {
    sensors: (machine) => {
      return _.filter(db.sensors, { machine: machine.id });
    },
    lastKnownPosition: (machine) => {
      return _.find(db.gpsPositions, { id: machine.lastKnownPosition });
    }
  },
  Sensor: {
    machine: (sensor) => {
      return _.find(db.machines, { id: sensor.machine });
    }
  },
  // GpsPosition: {
  //   machine: (gpsPosition) => {
  //     return _.find(db.machines, { lastKnownPosition: gpsPosition.id });
  //   }
  // },
  DateTime: GraphQLDateTime,
};

module.exports = resolvers;