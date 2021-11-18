const mongoose = require('mongoose');

async function conectarBD(){
    
    try{

        await mongoose.connect(process.env.BASEDATOS);
        console.log("exito conectandonos a la bd");

    }catch(error){

        console.log(`Fallamos ${error}`)

    }
}

module.exports={
    conectarBD
}