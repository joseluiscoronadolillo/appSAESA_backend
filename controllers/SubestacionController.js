const Subestacion = require('../models').Subestacion;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, subestacions;

    [err, subestacions] = await to(Subestacion.findAll());
    if (err) return ReE(res, err, 422);

    let subestacions_json = [];
    for (let i in subestacions) {
        let subestacion = subestacions[i];
        let subestacions_info = subestacion.toWeb();

        subestacions_json.push(subestacions_info);
    }

    return ReS(res, {subestacions: subestacions_json});

}
module.exports.getAll = getAll;