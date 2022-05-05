const livros =  require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
    const opcaoInicial = read.question ('Deseja busacar por páginas? S/N  ').toUpperCase()

    if (opcaoInicial === 'S') {
       const paginas = livros.map(livro => livro.paginas)
       console.table(paginas)

    const inputPag = read.question('Digite uma das categorais da tabela:  ')

    const certezapag = read.question('tem certeza? S/N:  ').toUpperCase()

    if (certezapag === 'S'){

        const filtrosPag = livros.filter(livro => livro.paginas === inputPag)
        console.table(filtrosPag)
        
        }
   
    }
}


module.exports = listarLivrosNaoLidos
