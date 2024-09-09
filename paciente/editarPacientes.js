const {pacientes}= require('../data')

function editarPacientes(req, res){
    const {id}= req.params
    const newNome = req.body.nome 
    const newDataNascimento = req.body.dataNascimento 

    const paciente= pacientes.find(p => p.id == Number(id))

    if(!paciente){
        return res.status(404).send('Paciente não encontrado!')
    }

    paciente.nome=newNome
    paciente.dataNascimento=newDataNascimento

    return res.status(202).send('editado com sucesso')
}

module.exports = editarPacientes