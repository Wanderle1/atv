const {consultas, pacientes, medicos}= require('../data')

function adicionarConsulta(req, res){
    const {idPaciente, idMedico, descricao}= req.body

    const idP= pacientes.find(p => p.id == Number(idPaciente))
    if(!idP){
        return res.status(404).send('id do Paciente não encontrado!')
    }
    const idM= medicos.find(m => m.id == Number(idMedico))
    if(!idM){
        return res.status(404).send('id do medico não encontrado!')
    }
    if(!descricao){
        return res.status(404).send('É necessario uma descrisão de consulta!')
    }

    let id=1
    while(consultas.some(c => c.id == id)){
        id++
    }

    let newConsulta = {id: id, idPaciente: idP.id, idMedico: idM.id, descricao: descricao}
    consultas.push(newConsulta)

    
    res.status(202).send('adicionado com sucesso!')
}

module.exports= adicionarConsulta