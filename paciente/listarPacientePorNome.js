const {pacientes}= require('../data')

function listarPacientePorNome(req, res){
    const {nome}= req.query

    const lisNomePaciente = pacientes.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()))

    if(lisNomePaciente.length == 0){
        return res.status(404).send('paciente não encontrado')
    }

    res.status(202).send({Paciente: lisNomePaciente})
}

module.exports = listarPacientePorNome