'use strict';

const bcrypt 			= require('bcrypt');//para encriptar algo, en caso de contraseña
const bcrypt_p 			= require('bcrypt-promise');//promesas para encriptacion
const jwt           	= require('jsonwebtoken');//manejo de token

// const Roles          	= require('../models').Roles;

module.exports = (sequelize, DataTypes) => {
  	var User = sequelize.define('User', {
    	email    : {type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: {msg: "Email invalid."} }},
    	password : {type: DataTypes.STRING, allowNull: false, unique: false},
  	});

  	User.associate = function(models){
  		User.belongsToMany(models.Rol,{foreignKey:'user_id',through:{model:models.UserRol}});
  		User.hasMany(models.Operacion);
  	};

	User.beforeSave(async (user, options) => {
	    let err;
	    if (user.changed('password')){
	        let salt, hash
	        [err, salt] = await to(bcrypt.genSalt(10));
	        if(err) TE(err.message, true);

	        [err, hash] = await to(bcrypt.hash(user.password, salt));
	        if(err) TE(err.message, true);

	        user.password = hash;
	    }
	});

	User.prototype.comparePassword = async function (pw) {
	    let err, pass
	    if(!this.password) TE('password not set');

	    [err, pass] = await to(bcrypt_p.compare(pw, this.password));
	    if(err) TE(err);

	    if(!pass) TE('invalid password');

	    return this;
	};

	User.prototype.getJWT = function () {
	    let expiration_time = parseInt(CONFIG.jwt_expiration);
	    return "Bearer "+jwt.sign({user_id:this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
	};

	User.prototype.toWeb = function (pw) {
	    let json = this.toJSON();
	    return json;
	};

  	return User;
};