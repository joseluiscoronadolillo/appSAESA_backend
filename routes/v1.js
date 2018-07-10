const express 			= require('express');
const router 			= express.Router();

const custom 	        = require('./../middleware/custom');
const passport      	= require('passport');
const path              = require('path');

const UserController = require('./../controllers/UserController');
const SubestacionController = require('./../controllers/SubestacionController');
const TrampaController = require('./../controllers/TrampaController');
const OtController = require('./../controllers/OtController');
const EquipoController = require('./../controllers/EquipoController');
const ComponenteController = require('./../controllers/ComponenteController');

require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});

router.post('/users', UserController.create);
router.post('/users/login',UserController.login);

router.get('/subestacions',SubestacionController.getAll);

router.get('/ots/:numero_ot',OtController.getOt);

router.get('/trampas/:se_id',TrampaController.getAllForSe);

router.get('/equipos/:se_id',EquipoController.getAllForSe);

router.get('/componentes/:se_id',ComponenteController.getAllForSe);

module.exports = router;