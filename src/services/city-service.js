const { CityRepository } =  require('../repository/index');    
// here this service can be called from index.js because this can be easy and helpful for us to take all the repository values from a single file.


class CityService{
    constructor(){
        this.cityRepository = new CityRepository();              
        // here we used constructor because everytime we call a new object new table is created so we need to use constructor to add the values on the exxisting one.
    }

    async createCity(data) {
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        }catch(error){
            console.log("Error at service layer");
            throw{error};
        }
    }

    async deleteCity(id) {
        try{
            const response = await this.cityRepository.deleteCity(id);
            return response;
        }catch(error){
            console.log("Error at service layer");
            throw{error};
        }
    }

    async updateCity(cityId,data) {
        try{
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        }catch(error){
            console.log("Error at service layer");
            throw{error};
        }
    }

    async getCity(cityId) {
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("Error at service layer");
            throw{error};
        }
    }


    async getAll(filter) {
        try{
        
            const city = await this.cityRepository.getAll({name : filter.name});
            return city;
        }catch(error){
            console.log("Error at service layer");
            throw{error};
        }
    }
}

module.exports = CityService;