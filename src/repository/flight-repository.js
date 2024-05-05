const {Flight } = require('../models/index');
const {Op} = require('sequelize');


class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        // if(data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             { price: {[Op.lte]: data.maxPrice} },           //This filter object is for filtering flights b/w min and max price.
        //             { price: {[Op.gte]: data.minPrice} }
        //         ]
        //     })
        // }

        let priceFilter = [];              // here we are creating and array and manupulating the data
        if(data.minPrice) {
            // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
            // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }
        Object.assign(filter, {[Op.and]: priceFilter});
        // Object.assign(filter, {[Op.and]: [{ price: {[Op.lte]: 7000} }, { price: {[Op.gte]: 4000} }]})
        // console.log(filter);
        return filter;
    }


    async createFlight(data){
        try{
            const flight = await Flight.create(data);
            return flight;
        }catch(error){
            console.log("Error at repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);        //here we are using the power of ORM   //# prefix is for private class.
            const flight = await Flight.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;