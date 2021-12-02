//Importo las utilidades model y Schema de mongoose
const { model, Schema } = require('mongoose')

//Programar mi modelo de datos
const ReservaModelo = Schema({
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    },
    numeroPersonas: {
        type: Number,
        required: true
    }

})

module.exports = model('reservacione', ReservaModelo)