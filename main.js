const express = require('express');
require('dotenv').config();
const cors = require('cors');
/* TODO: Coneccion base de datos*/
const Connection = require('./src/config/db');

const app = express();
/* TODO: variable de entorno del puerto */
const port = process.env.PORT || 5001;

/* TODO: MIDDLEWARES */
app.use(cors());
app.use(express.json());
/* TODO: Rutas o peticiones http */
app.use('/api/v1', require('./src/routes'));
/* TODO: LLamar a la coneccion de BD */
Connection(port);
app.listen(port, () =>
  console.log('El servidor esta encendido en el puerto:', port)
);
