const express = require('express');
const router = express.Router()


//send es muestra en pantalla 'form ejemplo'
//renderzar una arc hbs con res.render
router.get('/', (req, res)=> {
    res.send('hola')
})

router.get('/hello', (req, res)=> {
    res.send('hello world que mas')
})

module.exports = router