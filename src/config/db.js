const mongoose = require('mongoose');

const Connection = (port) => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`Conexion on http://localhost:${port}`);
  } catch (error) {
    console.log(error.message);
    console.log('No se puede conectar con las base de datos.');
  }
};

module.exports = Connection;
