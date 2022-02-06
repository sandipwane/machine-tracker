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
    machine: (_parent, args) => {
      const id = parseInt(_.get(args, 'where.id', -1));
      return _.find(db.machines, { id });
    },
    sensorData: (_parent, args) => {
      const { id, from, to } = args;
      const dataPoints =  _.filter(db.sensorDataPoints, { sensorId: parseInt(id) });
      return dataPoints;
      /* // filter data points between from and to
      const filteredDataPoints = _.filter(dataPoints, (dataPoint) => {
        const date = new Date(dataPoint.timestamp);
        return date >= from && date <= to;
      });

      return filteredDataPoints; */

    }
  },
  Machine: {
    sensors: (machine) => {
      return _.filter(db.sensors, { machine: machine.id });
    },
    lastKnownPosition: (machine) => {
      return _.find(db.gpsPositions, { id: machine.lastKnownPosition });
    },
  },
  Sensor: {
    machine: (sensor) => {
      return _.find(db.machines, { id: sensor.machine });
    }
  },
  SensorDataPoint: {
    timestamp: (sensorDataPoint) => {
      return new Date(sensorDataPoint.timestamp);
    },
    sensorId: (sensorDataPoint) => {
      return _.find(db.sensors, { id: sensorDataPoint.sensorId });
    }

  },
  DateTime: GraphQLDateTime,
};

module.exports = resolvers;