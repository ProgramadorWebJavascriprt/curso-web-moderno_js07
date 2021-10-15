console.log('curso de javascript web moderno/Array:Filter #01;') //quinta-feira,20/05/2021;21:30:00 h +|-
const produtos  = [
    {nome: 'Notebook',preco: 2499 , fragil: true},
    {nome: 'iPad Pro',preco:4199 , fragil: true },
    {nome: 'Copo de vidro',preco: 12.49 , fragil: true },
    {nome: 'Copo de Plástico',preco:18.99 , fragil:false }
]
console.log(produtos.filter(function(p){
    return false
}))
const caro = produto =>  produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))
