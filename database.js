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
	}
]

var machines = [

  new Machine(1, 'Machine 1', [1,2], 1),
  new Machine(2, 'Machine 2', [3,4], 2),
  new Machine(3, 'Machine 3'),
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
  sensors
}