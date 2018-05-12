const Ot				= 	require('./../models').Ot;

let ots = async function (req, res, next) {
	let ot_id, err, ot;
	ot_id = req.params.ot_id;

	[err, ot] = await to(Ot.findOne({where:{numero_ot: ot_id}}));
	if (err) return ReS(res, "No se ha encontrado la Orden de Trabajo");
	if (!ot) return ReE(res, "OT no encontrada: "+ot_id);

	/*OJO DARLE UNA VUELTA A ESTO, UN USUARIO PODRIA INGRESAR UNA OT QUE NO LE CORRESPONDE!!!
	let user = req.user;
	if (OT.UserId != user.id) return ReE(res, "El usuario no tiene acceso a esta OT");
*/
	req.ot = ot;
	next();
} 
module.exports.ots = ots;