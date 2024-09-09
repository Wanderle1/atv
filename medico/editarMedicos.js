const {medicos}= require('../data')

function editarEstudante(req, res){
    const {id}= req.params
    const newNome= req.body.nome
    const newEspecialidade= req.body.especialidade 

    const medico = medicos.find(m => m.id == Number(id))

    if(!medico){
        return res.status(404).send('Medico não encontrado!')
    }

    medico.nome= newNome
    medico.especialidade= newEspecialidade

    res.status(202).send('editado com sucesso!')
}

module.exports= editarEstudante