const express = require('express');
const app = express();
const router = require('./src/rutas/rutas')
const config = require('./config/config')
const morgan = require('morgan');



app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(router);
app.listen(config.PORT,()=>console.log(`Servidor corriendo en el puerto ${config.PORT}`));

