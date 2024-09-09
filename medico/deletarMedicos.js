const {medicos}= require('../data')

function deletarMedicos(req, res){
    const {id}= req.params

    const index = medicos.findIndex(m => m.id == Number(id))

    if(index === -1){
        return res.status(404).send('Medico não encontrado!')
    }

    medicos.splice(index, 1)[0]

    res.status(202).send('Deletado com sucesso!')

}

module.exports= deletarMedicos