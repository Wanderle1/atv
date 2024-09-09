const {medicos}=require('../data')

function listarMedico(req, res){
    res.status(202).send(medicos)
}

module.exports= listarMedico