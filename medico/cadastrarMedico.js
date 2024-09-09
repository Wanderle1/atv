const {medicos}= require('../data')

function cadastrarMedico(req, res){
    const {nome}= req.body
    const {especialidade}= req.body

    if(!nome){
        return res.status(404).send('É necessario um nome!')
    }
    if(!especialidade){
        return res.status(404).send('É necessario uma especialidade!')
    }

    let id=1
    while(medicos.some(m => m.id == id)){
        id++
    }

    let newMedico ={id: id, nome: nome, especialidade:especialidade}
    medicos.push(newMedico)

    res.status(202).send('Adicionado com sucesso')
}

module.exports = cadastrarMedico