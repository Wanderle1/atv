let {consultas, pacientes} = require('../data')

function listarMedicosDoPaciente(req, res){
    let {idPaciente}= req.query

    const Paciente = consultas.filter(p => p.idPaciente == idPaciente)

    if(Paciente.length === 0){
        res.status(404).send('medicos do paciente não encontrado!')
    }

    let medicoDoPaciente= paciente.idMedico
    res.status(202).send({MedicosDoPaciente: medicoDoPaciente})
    
}

module.exports = listarMedicosDoPaciente