const {consultas}= require('../data')

function editarConsultas(req, res){
    const {id}= req.params
    const {idPaciente, idMedico, descricao}= req.body

    const consulta = consultas.find(c => c.id == Number(id))

    if(!consulta){
        return res.status(404).send('Consulta não encontrada!')
    }

    consulta.idPaciente= idPaciente
    consulta.idMedico= idMedico
    consulta.descricao= descricao

    res.status(202).send('editado com sucesso!')
}

module.exports = editarConsultas