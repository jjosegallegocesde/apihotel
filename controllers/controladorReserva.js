//EL controlador se encaragar de administrar
//las peticione y repuestas
const { request, response } = require('express')

//importar el servicio
const { insertarReserva } = require('../services/servicioReserva.js')
const { leerReserva } = require('../services/servicioReserva.js')
const { leerReservas } = require('../services/servicioReserva.js')
const { modificarReserva } = require('../services/servicioReserva.js')
const { borrarReserva } = require('../services/servicioReserva.js')

//cuales son las operaciones
//que debe realizar mi SERVIDOR

async function registrarReserva(peticion = request, respuesta = response) {

    //capturo los datos que llegan el cuerpo de la peticion
    let datosCliente = peticion.body;

    //intentar grabar los datos een bd usando el servicio
    try {

        await insertarReserva(datosCliente)
        respuesta.status(200).json({
            estado: true,
            mensaje: "exito registrando la reserva"
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "upsss... tenemos un problema " + error
        })

    }


}

async function buscarReserva(peticion = request, respuesta = response) {

    //capturar el id del jugador a buscar
    let id = peticion.params.id

    try {

        let reserva = await leerReserva(id)
        respuesta.status(200).json({
            estado: true,
            datos: reserva
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "upsss... " + error
        })

    }
}

async function buscarReservas(peticion = request, respuesta = response) {

    try {

        let reservas = await leerReservas()
        respuesta.status(200).json({
            estado: true,
            datos: reservas
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "upsss... " + error
        })

    }


}

async function editarReserva(peticion = request, respuesta = response) {

    //recibir los datos del body y el id de los params
    let datos = peticion.body
    let id = peticion.params.id

    try {

        await modificarReserva(id, datos)
        respuesta.status(200).json({
            estado: true,
            mensaje: "exito editando la reserva"
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "upsss... " + error
        })

    }



}

async function eliminarReserva(peticion = request, respuesta = response) {

    let id = peticion.params.id

    try {

        await borrarReserva(id)
        respuesta.status(200).json({
            estado: true,
            mensaje: "exito borrando la reserva"
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "upsss... " + error
        })

    }


}


module.exports = {

    registrarReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva

}