//Importo las utilidades model y Schema de mongoose
const { model, Schema } = require('mongoose')

//Programar mi modelo de datos
const HabitacionModelo = Schema({
    nombre: {
        type: String,
        required: true
    },
    fotografia: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precioAdulto: {
        type: Number,
        required: true
    },
    precioNino: {
        type: Number,
        required: true
    }

})

module.exports = model('habitacione', HabitacionModelo)