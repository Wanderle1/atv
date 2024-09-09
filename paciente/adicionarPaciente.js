const {pacientes}= require('../data')

function adicionarPacientes(req,res){
    const {nome}=req.body
    const {dataNascimento}=req.body

    if(!nome){
        return res.status(404).send('É necessario um nome!')
    }
    if(!dataNascimento){
        return res.status(404).send('É necessario uma data de nascimento!')
    }

    let id=1
    while(pacientes.some(p => p.id == id)){
        id++
    }

    let newPaciente= {id: id, nome: nome, dataNascimento: dataNascimento}
    pacientes.push(newPaciente)

    res.status(202).send('adicionado com sucesso!')
}

module.exports= adicionarPacientes