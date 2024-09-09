const {medicos}= require('../data')

function listarPorNome(req, res){
    const {nome}= req.query

    const lisNomeMedico = medicos.filter(m => m.nome.toLowerCase().includes(nome.toLowerCase()))

    if(lisNomeMedico.length == 0){
        return res.status(404).send('Medico não encontrado')
    }

    res.status(202).send({medico: lisNomeMedico})
}

module.exports = listarPorNome