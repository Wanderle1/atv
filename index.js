const express = require('express')
const app = express()
port = 3000
app.use(express.json())

app.get('/', (req, res) => {
    console.log('iniciando')
})

const cadastrarMedicos = require('./medico/cadastrarMedico')
app.post('/medicos', cadastrarMedicos)

const listarMedicos= require('./medico/listarMedico')
app.get('/medicos', listarMedicos)

const editarMedicos = require('./medico/editarMedicos')
app.put('/medicos/:id', editarMedicos)

const deletarMedicos = require('./medico/deletarMedicos')
app.delete('/medicos/:id', deletarMedicos)

const lisNomeMedico = require('./medico/listarPorNome')
app.get('/medicos/nome', lisNomeMedico)

const listarPorEspecialidade= require('./medico/listarPorEspecialidade')
app.get('/medicos/especialidade', listarPorEspecialidade)

const adicionarPacientes = require('./paciente/adicionarPaciente')
app.post('/pacientes', adicionarPacientes)

const listarPacientes= require('./paciente/listarPaciente')
app.get('/pacientes', listarPacientes)

const editarPacientes = require('./paciente/editarPacientes')
app.put('/pacientes/:id', editarPacientes)

const deletarPaciente= require('./paciente/deletarPaciente')
app.delete('/pacientes/:id', deletarPaciente)

const listarPacientePorNome= require('./paciente/listarPacientePorNome')
app.get('/pacientes/nome', listarPacientePorNome)

const listarPacientePorData= require('./paciente/listarPacientePorData')
app.get('/pacientes/dataNascimento', listarPacientePorData)

const listarMedicosDoPaciente= require('./paciente/listarMedicosDoPaciente')
app.get('/pacientes/medicos', listarMedicosDoPaciente)

const adicionarConsulta = require('./consulta/adicionarConsulta')
app.post('/consultas', adicionarConsulta)

const listarConsulta = require('./consulta/listarConsulta')
app.get('/consultas', listarConsulta)

const editarConsultas= require('./consulta/editarConsulta')
app.put('/consultas/:id', editarConsultas)

const deletarConsultas= require('./consulta/deletarConsultas')
app.delete('/consultas/:id', deletarConsultas)

const listarPorIdMedico= require('./consulta/listarPorIdMedico')
app.get('/consultas/idMedico', listarPorIdMedico)

const listarPorIdPaciente= require('./consulta/listarPorIdPaciente')
app.get('/consultas/idPaciente', listarPorIdPaciente)


app.listen(port, () =>{
    console.log(`Iniciado em http://localhost:${port}`)
})