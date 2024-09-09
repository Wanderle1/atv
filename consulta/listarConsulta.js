const {consultas}= require('../data')

function listarConsulta(req, res){
    res.status(202).send(consultas)
}

module.exports= listarConsulta