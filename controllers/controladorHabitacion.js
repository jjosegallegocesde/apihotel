//EL controlador se encaragar de administrar
//las peticione y repuestas
const { request, response } = require('express')

//importar el servicio
const { insertarHabitacion } = require('../services/servicioHabitacion.js')
const { leerHabitacion } = require('../services/servicioHabitacion.js')
const { leerHabitaciones } = require('../services/servicioHabitacion.js')
const { modificarHabitacion } = require('../services/servicioHabitacion.js')
const { borrarHabitacion } = require('../services/servicioHabitacion.js')

//cuales son las operaciones
//que debe realizar mi SERVIDOR

async function registrarHabitacion(peticion = request, respuesta = response) {

    //capturo los datos que llegan el cuerpo de la peticion
    let datosCliente = peticion.body;

    //intentar grabar los datos een bd usando el servicio
    try {

        await insertarHabitacion(datosCliente)
        respuesta.status(200).json({
            estado: true,
            mensaje: "exito registrando la habitacion"
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "upsss... tenemos un problema " + error
        })

    }


}

async function buscarHabitacion(peticion = request, respuesta = response) {

    //capturar el id del jugador a buscar
    let id = peticion.params.id

    try {

        let habitacion = await leerHabitacion(id)
        respuesta.status(200).json({
            estado: true,
            datos: habitacion
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "upsss... " + error
        })

    }
}

async function buscarHabitaciones(peticion = request, respuesta = response) {

    try {

        let habitaciones = await leerHabitaciones()
        respuesta.status(200).json({
            estado: true,
            datos: habitaciones
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "upsss... " + error
        })

    }


}

async function editarHabitacion(peticion = request, respuesta = response) {

    //recibir los datos del body y el id de los params
    let datos = peticion.body
    let id = peticion.params.id

    try {

        await modificarHabitacion(id, datos)
        respuesta.status(200).json({
            estado: true,
            mensaje: "exito editando la habitacion"
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "upsss... " + error
        })

    }



}

async function eliminarHabitacion(peticion = request, respuesta = response) {

    let id = peticion.params.id

    try {

        await borrarHabitacion(id)
        respuesta.status(200).json({
            estado: true,
            mensaje: "exito borrando la habitacion"
        })

    } catch (error) {
        respuesta.status(400).json({
            estado: false,
            mensaje: "upsss... " + error
        })

    }


}


module.exports = {

    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion

}