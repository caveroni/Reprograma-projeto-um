const livros =  require('../database')
const read = require('readline-sync')

const buscarLivros = () => {
    const opcaoInicial = read.question ('Deseja busacar por categoria S/N  ').toUpperCase()

    if (opcaoInicial2 === 'S') {
       const categorias = livros.map(livro => livro.categoria)
       console.table(categorias)

        const inputCategoria = read.question('Digite uma das categorais da tabela:  ')
        
        const certeza = read.question('tem certeza? S/N:  ').toUpperCase()

        if (certeza === 'S'){
            const filtros = livros.filter(livro => livro.categoria === inputCategoria)
            console.table(filtros)
        }

    } 
    
}


module.exports = buscarLivros
