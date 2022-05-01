//usando el objeto express
const express = require('express');

//App de express
const app = express();

app.use(express.json());//Indicamos que usaremos Json para la comunicación, envio y recibo de datos

//Puerto
const port = 3000;


//Inicializamos la app
app.listen(port,()=>{
    console.log(`App escuchando en el puerto ${port}`);
})



