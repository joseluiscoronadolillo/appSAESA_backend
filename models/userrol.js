'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserRol = sequelize.define('UserRol', {
  	rol_id : {type:DataTypes.INTEGER,unique:'user_rol',references:{model:'User',key:'id'}},
  	user_id: {type:DataTypes.INTEGER,unique:'user_rol'},
  }, {});
  UserRol.associate = function(models) {
    UserRol.belongsTo(models.User,{foreignKey:'user_id'});
    UserRol.belongsTo(models.Rol,{foreignKey:'rol_id'});
  };

   UserRol.prototype.toWeb = function (pw) {
    let json = this.toJSON();
    return json;
  };
  return UserRol;
};