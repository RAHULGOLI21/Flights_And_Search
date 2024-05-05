// This file is created to connect all the repositories to a single service.n

const CrudRespository = require('./crud-repository');

module.exports= {
    CityRepository : require ('./city-repositoty'),
    FlightRepository : require ('./flight-repository'),
    AirplaneRepository: require ('./airplane-repository'),
    AirportRespository: require('./airport-repository'),
    CrudRespository: require('./crud-repository')
}