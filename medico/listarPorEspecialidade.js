const {medicos}= require('../data')

function listarPorEspecialidade(req, res){
    const {especialidade}= req.query

    const lisEspecialidadeMedico = medicos.filter(m => m.especialidade.toLowerCase().includes(especialidade.toLowerCase()))

    if(lisEspecialidadeMedico.length == 0){
        return res.status(404).send('Medico não encontrado')
    }

    res.status(202).send({medico: lisEspecialidadeMedico})
}

module.exports = listarPorEspecialidade