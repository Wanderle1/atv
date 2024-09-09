let {consultas} = require('../data')

function listarPorIdMedico(req, res){
    let {idMedico}= req.query

    const idM = consultas.filter(p => p.idMedico == idMedico)

    if(idM.length === 0){
        res.status(404).send('Consulta não encontrada!')
    }

    res.status(202).send({Paciente: idM })
    
}

module.exports = listarPorIdMedico