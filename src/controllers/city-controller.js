const {CityService} = require('../services/index');

/*
 data -> req.body
 Inoder to use cityService we need to create cityService object
*/
const cityService = new CityService(); 

const create = async (req, res) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully created a city",
            err : {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city",
            err : error
        })
    }
}

// ../city/:id
const destroy =async (req, res) => {
    try{
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully deleted a city",
            err : {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete a city",
            err : error
        })
    }
}


//  ../city/:id
const get =async (req, res) => {
    try{
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully fletch a city",
            err : {}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fletch a city",
            err : error
        })
    }
}


// ../city/:id  ->carries req.body     patch request
const update =async (req, res) => {
    try{
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully updated a city",
            err : {}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update a city",
            err : error
        })
    }
}

const getAll =async (req, res) => {
    try{

        const city = await cityService.getAll(req.query);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully fletched all the cities",
            err : {}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Unable to fletch all the cities",
            err : error
        })
    }
}


module.exports = {create,destroy,update,get, getAll};