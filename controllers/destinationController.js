// controllers/destinationController.js
const Destination = require('../models/destinationModel');

exports.getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.createDestination = async (req, res) => {
  try {
    const { name, description, country, bestTimeToVisit, attractions } = req.body;

    const newDestination = new Destination({
      name,
      description,
      country,
      bestTimeToVisit,
      attractions,
    });

    const destination = await newDestination.save();
    res.json(destination);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
