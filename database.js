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
  }
]

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
			latitude: 45.516,
			longitude: -122.636
		}
	}
]

var machines = [
  {
    id: 1,
    name: 'Machine 1',
    sensors: [1, 2],
    lastKnownPosition: 1,
  },
]

module.exports = {
  machines,
  gpsPositions,
  sensors
}