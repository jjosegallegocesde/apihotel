//EL controlador se encaragar de administrar
//las peticione y repuestas
const {request,response}=require('express')

//importar el servicio
const {insertarJugador}=require('../services/servicios.js')
const {leerJugador}=require('../services/servicios.js')
const {leerJugadores}=require('../services/servicios.js')
const {modificarJugador}=require('../services/servicios.js')
const {borrarJugador}=require('../services/servicios.js')
//cuales son las operaciones
//que debe realizar mi SERVIDOR

async function registrarJugador(peticion=request,respuesta=response){

    //capturo los datos que llegan el cuerpo de la peticion
    let datosCliente=peticion.body;

    //intentar grabar los datos een bd usando el servicio
    try{

        await insertarJugador(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito registrando el jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... tenemos un problema "+error
        })
        
    }

   
}

async function buscarJugador(peticion=request,respuesta=response){

   //capturar el id del jugador a buscar
   let id=peticion.params.id

   try{

    let jugador= await leerJugador(id)
    respuesta.status(200).json({
        estado:true,
        datos: jugador
        })

    }catch(error){
        respuesta.status(400).json({
        estado:false,
        mensaje:"upsss... "+error
        })
    
    }
}

async function buscarJugadores(peticion=request,respuesta=response){

    try{

        let jugadores= await leerJugadores()
        respuesta.status(200).json({
            estado:true,
            datos: jugadores
            })
    
        }catch(error){
            respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
            })
        
        }
    

}

async function editarJugador(peticion=request,respuesta=response){

    //recibir los datos del body y el id de los params
    let datos=peticion.body
    let id=peticion.params.id

    try{

        await modificarJugador(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito editando el jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }

    

}

async function eliminarJugador(peticion=request,respuesta=response){

    let id=peticion.params.id

    try{

        await borrarJugador(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito mandando a la banca al jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }


}


module.exports={

    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador

}