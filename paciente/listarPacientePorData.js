let {pacientes} = require('../data')

function listarPacientePorData(req, res){
    let {dataNascimento}= req.query

    const data = pacientes.filter(p => p.dataNascimento == dataNascimento)

    if(data.length === 0){
        res.status(404).send('paciente não encontrado!')
    }

    res.status(202).send({Paciente: data })
    
}

module.exports = listarPacientePorData