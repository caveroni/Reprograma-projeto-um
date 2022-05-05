const livros =  require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {
    const opcaoInicial = read.question ('Deseja busacar por recomendados? S/N  ').toUpperCase()

    if (opcaoInicial === 'S') {
       const rec = livros.map(livro => livro.recomenda)
       console.table(paginas)

    const inputPag = read.question('Digite uma das categorais da tabela:  ')

    const certezapag = read.question('tem certeza? S/N:  ').toUpperCase()

    if (certezapag === 'S'){

        const filtrosPag = livros.filter(livro => livro.recomenda === inputPag)
        console.table(filtrosPag)
        
        }
   
    }
}


module.exports = listarRecomendados