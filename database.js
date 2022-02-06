var sensors = [
  {
    id: 1,
    name: 'Sensor 1',
    machine: 1,
  },
  {
    id: 2,
    name: 'Sensor 2',
    machine: 1,
  },
  {
    id: 3,
    name: 'Sensor 3',
    machine: 2,
  },
  {
    id: 4,
    name: 'Sensor 4',
    machine: 2,
  },
  {
    id: 5,
    name: 'Sensor 5',
    machine: 3,
  },
]

const sensorDataPoints = [
  {
    id: 1,
    timestamp: new Date("02/15/2022 11:00:00"),
    value: 12.3,
    sensorId: 1,
  },
  {
    id: 2,
    timestamp: new Date("02/16/2022 12:00:00"),
    value: 323.4,
    sensorId: 1,
  },
  {
    id: 3,
    timestamp: new Date(),
    value: 30.1,
  },
  {
    id: 4,
    timestamp: new Date(),
    value: 3.14,
  },
]

class Machine {
  constructor(id, name, sensors, lastKnownPosition) {
    this.id = id
    this.name = name
    this.sensors = sensors
    this.lastKnownPosition = lastKnownPosition
  }
}

var gpsPositions = [
  {
		id: 1,
		location: {
      latitude: 45.516,
      longitude: -122.636
    }
	},
	{
		id: 2,
		location: {
			latitude: -45.516,
			longitude: 12.636
		}
	},
	{
		id: 3,
		location: {
			latitude: 18.516726,
			longitude: 73.856255
		}
	}
]

var machines = [
  new Machine(1, 'Machine 1', [1,2], 1),
  new Machine(2, 'Machine 2', [3,4], 2),
  new Machine(3, 'Machine 3', [5], 3),
  new Machine(4, 'Machine 4'),
  new Machine(5, 'Machine 5', [1, 4], 1),
  new Machine(6, 'Machine 6'),
  new Machine(7, 'Machine 7'),
  new Machine(8, 'Machine 8'),
  new Machine(9, 'Machine 9'),
  new Machine(10, 'Machine 10'),
]

module.exports = {
  machines,
  gpsPositions,
  sensors,
  sensorDataPoints
}