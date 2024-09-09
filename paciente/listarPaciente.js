const {pacientes}= require('../data')

function listarPacientes(req, res){
    res.status(202).send(pacientes)
}

module.exports= listarPacientes