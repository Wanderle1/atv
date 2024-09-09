const {pacientes}= require('../data')

function deletarPaciente(req, res){
    const {id}= req.params

    const index = pacientes.findIndex(p => p.id == Number(id))

    if(index === -1){
        return res.status(404).send('Paciente não encontrado!')
    }

    pacientes.splice(index, 1)[0]

    res.status(202).send('Deletado com sucesso!')
}

module.exports = deletarPaciente