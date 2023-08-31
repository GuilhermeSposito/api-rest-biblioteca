const { livros } = require('../data/livros')
let { idAutoIncrement } = require('../data/livros')


const listarLivros = async (req, res) => {
    try {

        return res.status(200).json(livros)


    } catch (error) {
        console.log('ERRO AO LISTAR LIVROS')
    }
}

const listarLivrosId = async (req, res) => {
    try {
        const { id } = req.params
        const idNumerico = Number(id)

        if (isNaN(idNumerico)) {
            return res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
        }

        const verificaSeExisteLivro = livros.some(item => { return item.id === idNumerico })

        if (!verificaSeExisteLivro) {
            return res.status(404).json({ mensagem: "Livro Não Encontrado" })
        }

        const livroFiltrado = livros.filter(item => { return item.id === idNumerico })

        res.status(200).json(livroFiltrado)

    } catch (error) {
        console.log('ERRO AO LISTAR LIVRO PELO ID')
    }
}



const adicionarLivro = async (req, res) => {
    try {
        const { titulo, autor, ano, numPaginas } = req.body


        if (!titulo || !autor || !ano || !numPaginas) {
            return res.status(400).json({ mensagem: 'Informações obrigatórias não inseridas' })
        }

        const novoLivro = {
            id: idAutoIncrement++ + 1,
            titulo,
            autor,
            ano,
            numPaginas
        }

        livros.push(novoLivro)

        return res.status(201).json(livros)


    } catch (error) {
        console.log('ERRO AO INSERIR UM LIVRO')
    }
}

const modificarLivro = async (req, res) => {
    try {
        const { id } = req.params
        const { titulo, nome, autor, ano, numPaginas } = req.body

        if (!titulo || !autor || !ano || !numPaginas) {
            return res.status(400).json({ mensagem: 'Informações obrigatórias não inseridas' })
        }

        const verificaSeExisteLivro = livros.some(item => { return item.id === Number(id) })

        if (!verificaSeExisteLivro) {
            return res.status(404).json({ "mensagem": "Não existe livro a ser substituído para o ID informado." })
        }

        const livroFiltrado = livros.filter(item => { return item.id == id })

        livroFiltrado[0].titulo = titulo
        livroFiltrado[0].nome = nome
        livroFiltrado[0].autor = autor
        livroFiltrado[0].ano = ano
        livroFiltrado[0].numPaginas = numPaginas

        return res.status(201).json(livroFiltrado)

    } catch (error) {
        console.log("ERRO AO MODIFICAR LIVRO" + error)
    }
}

const modificaPropriedadeLivro = async (req, res) => {
    try {
        const { id } = req.params
        const { titulo, nome, autor, ano, numPaginas } = req.body

        const verificaSeExisteLivro = livros.some(item => { return item.id === Number(id) })

        if (!verificaSeExisteLivro) { return res.status(404).json({ mensagem: "Livro não encontrado" }) }

        const livroFiltrado = livros.filter(item => { return item.id === Number(id) })

        if (titulo) {
            //entra aqui se titulo tiver conteudo
            livroFiltrado[0].titulo = titulo
            return res.status(201).json({ mensagem: "Titulo do livro modificado com sucesso" })
        }

        if (nome) {
            //entra aqui se nome tiver conteudo
            livroFiltrado[0].nome = nome
            return res.status(201).json({ mensagem: "Nome do livro modificado com sucesso" })
        }

        if (autor) {
            //entra aqui se auto tiver conteudo
            livroFiltrado[0].autor = autor
            return res.status(201).json({ mensagem: "Autor do livro modificado com sucesso" })
        }

        if (ano) {
            //entra aqui se ano tiver conteudo
            livroFiltrado[0].ano = ano
            return res.status(201).json({ mensagem: "Ano do livro modificado com sucesso" })
        }

        if (numPaginas) {
            //entra aqui se numPaginas tiver conteudo
            livroFiltrado[0].numPaginas = numPaginas
            return res.status(201).json({ mensagem: "Número de páginas do livro modificado com sucesso" })
        }

        return res.status(400).json({ mensagem: "Insira uma informação para modificar o livro" })



    } catch (error) {
        console.log('ERRO AO MODIFICAR UMA PROPRIEDADE DO LIVRO' + error)
    }
}


const deletarLivro = async (req, res) => {
    try {
        const { id } = req.params

        const verificaSeExisteLivroERetornaOIndex = livros.findIndex(item => { return item.id === Number(id) })

        if (verificaSeExisteLivroERetornaOIndex === -1) {
            return res.status(404).json({ "mensagem": "Não existe livro a ser removido para o ID informado." })
        }

        livros.splice(verificaSeExisteLivroERetornaOIndex, 1)

        return res.status(200).json({ "mensagem": "Livro removido." })

    } catch (error) {
        console.log('ERRO AO REMOVER UM LIVRO' + ' ' + error)
    }
}


module.exports = {
    listarLivros,
    listarLivrosId,
    adicionarLivro,
    modificarLivro,
    modificaPropriedadeLivro,
    deletarLivro
}