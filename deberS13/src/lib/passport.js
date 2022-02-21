const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const  pool = require('../database.js')
const helpers = require('./helpers.js')

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'contraseña',//password es en el nombre de name de mi input de la contra 
    passReqToCallback:true,
},  async (req,username,contraseña,done)=> {
    const {fullname} = req.body
    const newUser = {
        username,
        contraseña,
        fullname    
    }
    newUser.password = await helpers.encryptPassword(password)
    const result = await pool.query('INSERT INTO users SET ?',[newUser])
    console.log(result);
}
))

