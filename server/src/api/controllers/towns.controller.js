//functions that will do the callbacks

const Towns = require('../models/towns.model')

const getTowns = async (req, res, next) => {
    try {
        const towns = await Towns.find()
        res.status(200).json(towns)
        
    } catch (error) {
        return next(error)
    }
}