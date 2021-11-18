//Importo las utilidades model y Schema de mongoose
const {model,Schema}=require('mongoose')

//Programar mi modelo de datos
const JugadorModelo=Schema({
    nombre:{
        type:String,
        required:true
    },
    edad:{
        type:String,
        required:true
    },
    posicion:{
        type:String,
        required:true
    },
    equipo:{
        type:String,
        required:true
    },
    camiseta:{
        type:Number,
        required:true
    },
    foto:{
        type:String,
        required:true
    }
})

module.exports=model('jugadoressabado',JugadorModelo)