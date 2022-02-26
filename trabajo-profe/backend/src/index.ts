import express,{Request,Response} from 'express'

var app = express()

//rutas  
app.get('/', (req, res) => {
    res.send('Hola mundo')
}) 
app.listen(3000,()=>{
    console.log('consola en ejecucion');
})

