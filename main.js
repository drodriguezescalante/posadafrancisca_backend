const express = require('express')
require('dotenv').config()
const cors = require('cors')
/* TODO: Coneccion base de datos*/
const connection = require('./src/config/db')

const app = express()
/* TODO: variable de entorno del puerto */
const port = process.env.PORT || 5001

/* TODO: MIDDLEWARES */
app.use(cors())
/* TODO: Rutas o peticiones http */
app.use('/api/saludo',saludo =async (req,res) => {await res.json({Saludo:"Hola Franco chivin",Saludo2:"Fraquito cuidado con tu tio"})} )
app.use('/api/despedida',despedida =async (req,res) => {await res.json({despedida:"Adios Franco chivin"})} )

/* TODO: LLamar a la coneccion de BD */
connection(port)
app.listen(port,()=>console.log('El servidor esta encendido en el puerto:',port))
