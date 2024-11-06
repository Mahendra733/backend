const mongoose = require('mongoose');

const portalSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String
});

const PortalModel = mongoose.model('student', portalSchema);
module.exports = PortalModel;
