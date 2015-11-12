var mongoose = require('mongoose');

var flightSchema = new mongoose.Schema({
  from: { type: String },
  to: { type: String },
  airline: {type: String}, // LATER add
  passengers: { type: Array }
});

var Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;