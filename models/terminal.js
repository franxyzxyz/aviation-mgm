var mongoose = require('mongoose');

var terminalSchema = new mongoose.Schema({
  name: { type: String },
  capacity: {type: Number},
  flights: { type: Array, default: []}
  // flights: [{
  //   _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}
  // }]
});

var Terminal = mongoose.model('Terminal', terminalSchema);

module.exports = Terminal;