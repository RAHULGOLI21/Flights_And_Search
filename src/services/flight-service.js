const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.airplaneRespository = new AirplaneRepository();
        this.flightrespository = new FlightRepository();
    }
    //Here we use consructor because we don't want to create the new airplanerepo and flighrepo objects every time, so we construct them. const airplane = await this.airplaneRespository.getAirplane(data.airplaneId);

    
    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRespository.getAirplane(data.airplaneId);
            const flight = await this.flightrespository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
        
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllFlightData(data) {
        try {
            const flights = await this.flightrespository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await this.flightrespository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateFlight(flightId,data){
        try {
            const response = await this.flightrespository.updateFlight(flightId,data);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}


module.exports = FlightService;


    