const User = require('../models').User;
const authService = require('./../services/AuthService');
const Roles = require('../models').UserRol;

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;

    if(!body.unique_key && !body.email){
        return ReE(res, 'Por favor, ingresa un email para registrar');
    } else if(!body.password){
        return ReE(res, 'Por favor, ingresa una contraseña para registrar');
    }else{
        let err, user;

        [err, user] = await to(authService.createUser(body));

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Usuario creado satisfactoriamente', user:user.toWeb(), token:user.getJWT()}, 201);
    }
}

module.exports.create = create;

const login = async function(req, res){
    const body = req.body;
    let err, user, rol;

    [err, user] = await to(authService.authUser(req.body));
    if(err) return ReE(res, err, 422);

    return ReS(res, {token:user.getJWT(), user:user.toWeb()});
}
module.exports.login = login;