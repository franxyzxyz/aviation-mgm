var mongoose = require('mongoose');

var passengerSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  dob: {type: Date}
});

var Passenger = mongoose.model('Passenger',passengerSchema);

module.exports = Passenger;