//importo el modelo de datos
const ReservaModelo = require('../models/ReservaModelo')

//Servicio para agregar un documento a la bd
async function insertarReserva(datosReserva) {

    let reservaAInsertar = new ReservaModelo(datosReserva)

    return await reservaAInsertar.save()

}

//Servicio para buscar 1 documento de la bd
async function leerReserva(id) {

    let reserva = await ReservaModelo.findById(id)
    return reserva

}

//Servicio para buscar TODOS los documentos
async function leerReservas() {
    let reservas = await ReservaModelo.find()
    return reservas
}

//Servicio para editar un documento
async function modificarReserva(id, datos) {

    return await ReservaModelo.findByIdAndUpdate(id, datos)

}

//Servicio para eliminar un documento
async function borrarReserva(id) {

    return await ReservaModelo.findByIdAndDelete(id)

}

module.exports = {
    insertarReserva,
    leerReserva,
    leerReservas,
    modificarReserva,
    borrarReserva
}
