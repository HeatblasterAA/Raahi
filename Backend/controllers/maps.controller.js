const { validationResult } = require("express-validator");
const mapService = require("../services/maps.service");


module.exports.getCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { address } = req.query;
    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        return res.status(200).json(coordinates);
    } catch (error) {
        console.error(error);
        return res.status(404).json({ error: 'Failed to fetch coordinates' });
    }
}

module.exports.getDistanceTime = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { origin, destination } = req.query;
    try {
        const distanceTime = await mapService.getDistanceAndTime(origin, destination);
        return res.status(200).json(distanceTime);
    } catch (error) {
        console.error(error);
        return res.status(404).json({ error: 'Failed to fetch distance and time' });
    }
}


module.exports.getSuggestions = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { address } = req.query;
    try {
        const suggestions = await mapService.getAutoCompleteSuggestions(address);
        return res.status(200).json(suggestions);
    } catch (error) {
        console.error(error);
        return res.status(404).json({ error: 'Failed to fetch suggestions' });
    }
}