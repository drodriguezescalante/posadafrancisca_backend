const mongoose = require('mongoose');
const roleSchema = new mongoose.Schema({
  //TODO: Nombre del Rol del usuario ejem: ADMINISTRADOR, VENDEDOR, ETC */
  role_name: {
    type: String,
    required: true,
  },
  //TODO: Nomenglatura del tipo de usuario ejem: ADMIN, VENDE, ETC */
  role_type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Role', roleSchema);
