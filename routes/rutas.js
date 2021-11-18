//Se trae la funcion Router para 
//separra las rutas de mi api
const { Router } = require('express')

//Importo los controladores
const { registrarJugador } = require('../controllers/controlador.js')
const { buscarJugador } = require('../controllers/controlador.js')
const { buscarJugadores } = require('../controllers/controlador.js')
const { editarJugador } = require('../controllers/controlador.js')
const { eliminarJugador } = require('../controllers/controlador.js')

const { registrarHabitacion } = require('../controllers/controladorHabitacion.js')
const { buscarHabitacion } = require('../controllers/controladorHabitacion.js')
const { buscarHabitaciones } = require('../controllers/controladorHabitacion.js')
const { editarHabitacion } = require('../controllers/controladorHabitacion.js')
const { eliminarHabitacion } = require('../controllers/controladorHabitacion.js')

const { registrarReserva } = require('../controllers/controladorReserva.js')
const { buscarReserva } = require('../controllers/controladorReserva.js')
const { buscarReservas } = require('../controllers/controladorReserva.js')
const { editarReserva } = require('../controllers/controladorReserva.js')
const { eliminarReserva } = require('../controllers/controladorReserva.js')

//una avribale que personaliza mis rutas
const rutas = Router()

//rutas del api
rutas.get('/hoteles/v1/habitaciones/:id', buscarHabitacion)
rutas.get('/hoteles/v1/habitaciones', buscarHabitaciones)
rutas.post('/hoteles/v1/habitaciones', registrarHabitacion)
rutas.put('/hoteles/v1/habitaciones/:id', editarHabitacion)
rutas.delete('/hoteles/v1/habitaciones/:id', eliminarHabitacion)

rutas.get('/avanzada/v1/jugadores/:id', buscarReserva)
rutas.get('/avanzada/v1/jugadores', buscarReservas)
rutas.post('/avanzada/v1/jugadores', registrarReserva)
rutas.put('/avanzada/v1/jugadores/:id', editarReserva)
rutas.delete('/avanzada/v1/jugadores/:id', eliminarReserva)

module.exports = rutas
