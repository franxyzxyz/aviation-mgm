var mongoose = require('mongoose');

var airportSchema = new mongoose.Schema({
  name: { type: String },
  country: { type: String },
  terminals: { type: Array, default: [] },
  opened: { type: Date }
});

var Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;