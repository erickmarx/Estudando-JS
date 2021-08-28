const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy
const Usuario = require('./usuarios-modelo')
const {InvalidArgumentError}  = require('../erros')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


function verificarUsuario(usuario){
    if (!usuario){
        throw new InvalidArgumentError('Não existe usuario com este email')
    }
}

async function verificarSenha(senha, senhaHash){
    const senhaValida = await bcrypt.compare(senha, senhaHash);
    if (!senhaValida){
        throw new InvalidArgumentError('Email ou senha invalidos')
    }
}


passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done) =>{
        try {
            const usuario = await Usuario.buscaPorEmail(email)
            verificarUsuario(usuario)
            await verificarSenha(senha, usuario.senhaHash)
            
            done(null, usuario)
        } catch (error) {
            done(error)
        }
    })
)

passport.use(
    new BearerStrategy(async (token, done) => {
        try {
            const payload = jwt.verify(token, process.env.CHAVE_JWT)
            const usuario = await Usuario.buscaPorId(payload.id)
            done(null, usuario)
        } catch (error) {
            done(error)
        }
    })
)