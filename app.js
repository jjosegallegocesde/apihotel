//se trae el dotenv (variables de entorno)
require('dotenv').config()

 
//Importo el modelo del servidor
const ServidorModelo = require('./models/ServidorModelo.js')

//Instanciando una clase
//sacando fotocopia
//usando la clase
//crear un objeto
const servidorFPC= new ServidorModelo();

//Puedo despertar el servidor
servidorFPC.despertarServidor()
 
