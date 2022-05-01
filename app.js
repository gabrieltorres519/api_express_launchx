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



// Creación de endpoint que requese una lista de explorers
//Utilizamos el método GET de express para este enpoint
app.get('/v1/explorers',(req,res)=>{
    console.log(`Api explorers GET ALL requests ${new Date()}`);



    // Crearemos unos objetos y un array o "lista" para retornarlos
    const explorer1 = {
        id: 1,
        name: 'Gabriel Torres',
    }
    const explorer2 = {
        id: 2,
        name: 'Gabriel Torres 2',
    }
    const explorer3 = {
        id: 3,
        name: 'Gabriel Torres 3',
    }
    const explorer4 = {
        id: 4,
        name: 'Gabriel Torres 4',
    }

    const explorers = [explorer1,explorer2,explorer3,explorer4]


    //Se agrega un código simbólico en la respuesta para que el usuario sepa que todo salió bien
    res.status(200).json(explorers);

})