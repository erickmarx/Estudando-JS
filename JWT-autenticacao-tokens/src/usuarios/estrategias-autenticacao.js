const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('./usuarios-modelo')
const {InvalidArgumentError}  = require('../erros')
const bcrypt = require('bcrypt')

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
            verificarSenha(senha, usuario.senhaHash)
            
            done(null, usuario)
        } catch (error) {
            done(error)
        }
    })
)