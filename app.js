const livros =  require('./database')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')


const read = require('readline-sync')
const resposta = read.question(`
====================== MENU ========================

1 - CATEGORIA
2 - ORDENAR POR QUANTIDADE DE PAGINAS
3 - RECOMENDADOS
4 - WISH LIST

5 - SAIR

Digite o numero de 1 a 5 da opcao desejada
`)

switch (resposta) {
    case '1':
        buscarLivros()
        break
    case '2':
        listarLivrosNaoLidos()
        break
    case '3':
        listarLivrosOrdenados()
        break
    case '4':
         listarRecomendados()
        break
    case '5':
        console.log('Você saiu do menu.')
        break
    default:
        console.log('Fim do algorítimo!')
}
