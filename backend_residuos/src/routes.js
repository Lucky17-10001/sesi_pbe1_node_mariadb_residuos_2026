const express = require("express")
const router = express.Router()

const Usuario = require('./controllers/usuario')
const Ocorrencia = require('./controllers/ocorrencia')

const rotaInicial = (req, res) => {
    res.json("Back-end respondendo")
}

router.get('/',rotaInicial)
router.post('/usuarios/login', Usuario.login)
router.post('/usuarios', Usuario.cadastrar)
router.get('/usuarios', Usuario.listar)
router.put('/usuarios/:id', Usuario.alterar)
router.delete('/usuarios/:id', Usuario.excluir)

router.post('/ocorrencias', Ocorrencia.cadastrar)
router.get('/ocorrencias', Ocorrencia.listar)
router.patch('/ocorrencias/:id', Ocorrencia.alterar)
router.delete('/ocorrencias/:id', Ocorrencia.excluir)
router.get('/ocorrencias/resumo', Ocorrencia.resumo)

module.exports = router