let {consultas} = require('../data')

function listarPorIdPaciente(req, res){
    let {idPaciente}= req.query

    const idP = consultas.filter(p => p.idPaciente == idPaciente)

    if(idP.length === 0){
        res.status(404).send('Consulta não encontrada!')
    }

    res.status(202).send({Paciente: idP })
    
}

module.exports = listarPorIdPaciente