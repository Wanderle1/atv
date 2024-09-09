const {consultas}= require('../data')

function deletarConsultas(req, res){
    const {id}= req.params

    const index= consultas.findIndex(c => c.id == Number(id))

    if(index === -1){
        return res.status(404).send('Consulta não encontrada!')
    }

    consultas.splice(index, 1)[0]

    res.status(202).send('Deletado com secesso!')
}

module.exports= deletarConsultas