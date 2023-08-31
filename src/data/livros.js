const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197,
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158,
    },
]

let idAutoIncrement

if (livros.length === 0) {
    idAutoIncrement = 0
} else {
    idAutoIncrement = livros[(livros.length - 1)].id
}


module.exports = {
    livros,
    idAutoIncrement
}