const express = require('express')
const rotas = express()

const controllers = require('../controllers/controller')

rotas.get('/livros', controllers.listarLivros)
rotas.get('/livros/:id', controllers.listarLivrosId)
rotas.post('/livros', controllers.adicionarLivro)
rotas.put('/livros/:id', controllers.modificarLivro)
rotas.patch('/livros/:id', controllers.modificaPropriedadeLivro)
rotas.delete('/livros/:id', controllers.deletarLivro)

module.exports = rotas