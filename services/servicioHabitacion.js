//importo el modelo de datos
const HabitacionModelo = require('../models/HabitacionModelo.js')

//Servicio para agregar un documento a la bd
async function insertarHabitacion(datosHabitacion) {

    let habitacionAInsertar = new HabitacionModelo(datosHabitacion)

    return await habitacionAInsertar.save()

}

//Servicio para buscar 1 documento de la bd
async function leerHabitacion(id) {

    let habitacion = await HabitacionModelo.findById(id)
    return habitacion

}

//Servicio para buscar TODOS los documentos
async function leerHabitaciones() {
    let habitaciones = await HabitacionModelo.find()
    return habitaciones
}

//Servicio para editar un documento
async function modificarHabitacion(id, datos) {

    return await HabitacionModelo.findByIdAndUpdate(id, datos)

}

//Servicio para eliminar un documento
async function borrarHabitacion(id) {

    return await HabitacionModelo.findByIdAndDelete(id)

}

module.exports = {
    insertarHabitacion,
    leerHabitacion,
    leerHabitaciones,
    modificarHabitacion,
    borrarHabitacion
}
