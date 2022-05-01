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



//Creando un endpoint con GET para que regrese un explorer según el id
app.get('/v1/explorers/:id',(req,res)=>{
    console.log(`API explorers GET request ${new Date()}`);
    console.log(`Getting explorer with id ${req.params.id}`);
    const explorer = {
        id: 1,
        name: "Gabriel Torres"
    }
    res.status(200).json(explorer)
})
// Con esto podemos ver en la consola del proyecto de express que nos imprime Getting explorer with id x,
// esto quere decir que desde postman que hacemos la petición GET con el explorers/1 recibimos el id como
// parámetros que se guardan en la variable de request "req"




//Creando un endpoint post que se encargue de actualizar un explorer
app.post('/v1/explorers',(req,res)=>{
    console.log(`API Explorers POST request ${new Date()}`);
    const requestBody = req.body //Parámetros del cliente
    console.log(`Lo que recibimos del cliente fue: ${requestBody}`)

    res.status(200).json(
        {message: "Created!!"}
    )
})
//No se crea un explorer, pero lo que sea que nos mande el cliente lo recibimos aquí 
//y podríamos crear el objeto si problema




//Creando un endpoint PUT para actualizar un explorer
app.put('/v1/explorers/:id',(req,res)=>{
    console.log(`API Explorers PUT request ${new Date()}`);
    console.log(`Update explorer with id ${req.params.id}`);
    const requestBody = req.body //Parámetros del cliente
    res.status(200).json({
        message: "Updated!!"
    })
})
// En la consola del proyecto express veremos que nos llega el id que se introduzca en postman desde la url de la petición PUT




// Creando endpoint DELETE para eliminar un explorer
app.delete('/v1/explorers/:id',(req,res)=>{
    console.log(`API Explorers DELETE request ${new Date()}`);
    console.log(`Delete explorer with id ${req.params.id}`);
    const requestBody = req.body //Paŕametros del cliente
    res.status(200).json({
        message: "Deleted!!"
    })
})
//Igualmente no borra nada, solo recibimos el id