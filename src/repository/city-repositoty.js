const { City } = require ('../models/index');
const { Op } = require('sequelize');

class CityRepository {

    //https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
    // For creating users and deleting users syntax we have gone throw above link for the reference.
    
    async createCity({name}) {
        try{
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Error at repository layer");
            throw {error};
        }
    }

    async deleteCity( cityid ){   //cityid is actually is id but here we are mimiking
        try{
            await City.destroy( {
                where : {                       //similarly where clause we are using search in reference
                    id : cityid
                }  
            });
            return true;
        } catch (error) {
            console.log("Error at repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){
        try {
            // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            //      
            // });
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            
            city.name = data.name;
            
            await city.save();
            
            return city;
        } catch (error) {
            console.log("Error at repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Error at repository layer");
            throw {error};
        }
    }

    async getAll(filter){
        try{
            if(filter.name)
            {
                const city = await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                }
                );
                return city;
            }
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log("Error at repository layer");
            throw {error};
        }
    }

}

module.exports = CityRepository;
