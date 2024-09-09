let {consultas, medicos} = require('../data')

function listarMedicosDoPaciente(req, res){
    let {idPaciente}= req.query

    const Paciente = consultas.filter(p => p.idPaciente == idPaciente)

    if(Paciente.length === 0){
        return res.status(404).send('medicos do paciente não encontrado!')
    }

    const idMedico= Paciente.map(p => p.idMedico)
    const medico= medicos.filter(m => idMedico.includes(m.id))
    const medicoDoPaciente= medico.map(m => ({nome: m.nome, especialidade: m.especialidade}))

    res.status(202).send({MedicosDoPaciente: medicoDoPaciente})
    
}

module.exports = listarMedicosDoPaciente